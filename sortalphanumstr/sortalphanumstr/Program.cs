using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sortalphanumstr
{
    class Program
    {
		// sort alphanumeric string so that Lower case characters always appear before Upper case characters
        static void Main(string[] args)
        {
            var str = "135qQwEeRr124";

            char [] chars = str.ToCharArray();

            Array.Sort(chars);

            Console.WriteLine(chars);
            var lowers = "";
            foreach (var x in chars)
            {

                if (Char.IsLower(x))
                {
                    Console.WriteLine(x);
                    lowers = lowers + x;
                }
            }

            Console.ReadLine();
        }
    }
}
