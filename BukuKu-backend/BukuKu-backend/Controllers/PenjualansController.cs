using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BukuKu_backend.Model;

namespace BukuKu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PenjualansController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PenjualansController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Penjualans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Penjualan>>> GetPenjualan()
        {
            return await _context.Penjualan.ToListAsync();
        }

        // GET: api/Penjualans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Penjualan>> GetPenjualan(int id)
        {
            var penjualan = await _context.Penjualan.FindAsync(id);

            if (penjualan == null)
            {
                return NotFound();
            }

            return penjualan;
        }

        // PUT: api/Penjualans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPenjualan(int id, Penjualan penjualan)
        {
            if (id != penjualan.PenjualanId)
            {
                return BadRequest();
            }

            _context.Entry(penjualan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PenjualanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Penjualans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Penjualan>> PostPenjualan(Penjualan penjualan)
        {
            _context.Penjualan.Add(penjualan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPenjualan", new { id = penjualan.PenjualanId }, penjualan);
        }

        // DELETE: api/Penjualans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePenjualan(int id)
        {
            var penjualan = await _context.Penjualan.FindAsync(id);
            if (penjualan == null)
            {
                return NotFound();
            }

            _context.Penjualan.Remove(penjualan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PenjualanExists(int id)
        {
            return _context.Penjualan.Any(e => e.PenjualanId == id);
        }
    }
}
