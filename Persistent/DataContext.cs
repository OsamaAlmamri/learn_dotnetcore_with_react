using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistent
{
    public class DataContext :DbContext
    {

        public DataContext(DbContextOptions options):base(options){

        }


       public DbSet<Activity> Activities {set;get;}
        
    }
}