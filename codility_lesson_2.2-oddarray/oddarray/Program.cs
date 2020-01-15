using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// find odd element in array
namespace oddarray
{
    class Program
    {
        static void Main(string[] args)
        {
            OddElement(new [] { 1, 1, 2, 2, 3,3 , 4 });
        }

        public static int OddElement(int [] A)
        {
            var grouped = A.GroupBy(a=> a);
            var odd = grouped.Where(x=>x.Count() < 2).ToList();
            Console.WriteLine(odd.First().Key);
            Console.ReadLine();
            if (odd.Count >0) { 
                return odd.First().Key;
            }

            throw new Exception("error");
        }
    }
}
