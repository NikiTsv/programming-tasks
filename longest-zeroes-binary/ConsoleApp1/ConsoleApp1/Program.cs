using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
	// find the longest zeroes sequence in a number in it's binary format
	// *could be done with string.split("1") => then get max array length
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("1041: " + CalcBinaryGap(1041));
            Console.WriteLine("32 : " + CalcBinaryGap(32));
            Console.WriteLine("9: " + CalcBinaryGap(9));
            Console.WriteLine("20: " + CalcBinaryGap(20));
            Console.WriteLine("5: " + CalcBinaryGap(5));
            Console.WriteLine("19: " + CalcBinaryGap(19));
            Console.WriteLine("42: " + CalcBinaryGap(42));

            Console.ReadLine();
        }

        static int CalcBinaryGap(int n)
        {
            string binary = Convert.ToString(n, 2);
            var arr = binary.ToCharArray().ToList().Select(x=> (int)Char.GetNumericValue(x)).ToList();
            List<int> binaryGaps = new List<int>();
            int lastOneFound = 0;
            for (int i = 0; i < arr.Count; i++)
            {
                if (arr[i] == 1)
                {
                    if (i - lastOneFound > 1)
                    {
                        binaryGaps.Add(i - lastOneFound - 1);
                    }

                    lastOneFound = i;
                }
            }

            if (binaryGaps.Count > 0)
            {
                return binaryGaps.Max();
            }

            return 0;

        }
    }
}
