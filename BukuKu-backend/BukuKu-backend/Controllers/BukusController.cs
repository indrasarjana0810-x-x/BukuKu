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
    public class BukusController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BukusController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Bukus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Buku>>> GetBuku()
        {
            return await _context.Buku.ToListAsync();
        }

        // GET: api/Bukus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Buku>> GetBuku(int id)
        {
            var buku = await _context.Buku.FindAsync(id);

            if (buku == null)
            {
                return NotFound();
            }

            return buku;
        }

        // PUT: api/Bukus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBuku(int id, Buku buku)
        {
            if (id != buku.BukuId)
            {
                return BadRequest();
            }

            _context.Entry(buku).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BukuExists(id))
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

        // POST: api/Bukus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Buku>> PostBuku(Buku buku)
        {
            _context.Buku.Add(buku);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBuku", new { id = buku.BukuId }, buku);
        }

        // DELETE: api/Bukus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBuku(int id)
        {
            var buku = await _context.Buku.FindAsync(id);
            if (buku == null)
            {
                return NotFound();
            }

            _context.Buku.Remove(buku);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BukuExists(int id)
        {
            return _context.Buku.Any(e => e.BukuId == id);
        }
    }
}
