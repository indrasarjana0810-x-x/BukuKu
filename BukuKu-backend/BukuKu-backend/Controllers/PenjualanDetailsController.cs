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
    public class PenjualanDetailsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PenjualanDetailsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/PenjualanDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PenjualanDetail>>> GetPenjualanDetail()
        {
            return await _context.PenjualanDetail.ToListAsync();
        }

        // GET: api/PenjualanDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PenjualanDetail>> GetPenjualanDetail(int id)
        {
            var penjualanDetail = await _context.PenjualanDetail.FindAsync(id);

            if (penjualanDetail == null)
            {
                return NotFound();
            }

            return penjualanDetail;
        }

        // PUT: api/PenjualanDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPenjualanDetail(int id, PenjualanDetail penjualanDetail)
        {
            if (id != penjualanDetail.PenjualanId)
            {
                return BadRequest();
            }

            _context.Entry(penjualanDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PenjualanDetailExists(id))
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

        // POST: api/PenjualanDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PenjualanDetail>> PostPenjualanDetail(PenjualanDetail penjualanDetail)
        {
            _context.PenjualanDetail.Add(penjualanDetail);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PenjualanDetailExists(penjualanDetail.PenjualanId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPenjualanDetail", new { id = penjualanDetail.PenjualanId }, penjualanDetail);
        }

        // DELETE: api/PenjualanDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePenjualanDetail(int id)
        {
            var penjualanDetail = await _context.PenjualanDetail.FindAsync(id);
            if (penjualanDetail == null)
            {
                return NotFound();
            }

            _context.PenjualanDetail.Remove(penjualanDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PenjualanDetailExists(int id)
        {
            return _context.PenjualanDetail.Any(e => e.PenjualanId == id);
        }
    }
}
