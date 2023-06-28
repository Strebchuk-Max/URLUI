using Microsoft.EntityFrameworkCore;
using UrlModel;

namespace UrlData{
    public class UrlContext : DbContext{
        public UrlContext(DbContextOptions<UrlContext> options) : base (options){
        }
        public DbSet<Url> urls { get ; set; }
    }
}