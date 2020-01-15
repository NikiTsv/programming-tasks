using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// find duplicated values in an array
namespace dupinarray
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>() { 1, 2, 4, 1,4,5,6,5};
            var dups = numbers.GroupBy(x => x).Where(x=>x.Count() > 1).ToList();
            foreach (var dup in dups)
            {
                Console.WriteLine(dup.Key);
            }
            
            Console.ReadLine();
        }
    }
}
