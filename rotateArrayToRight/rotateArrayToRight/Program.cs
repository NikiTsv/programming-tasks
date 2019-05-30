using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rotateArrayToRight
{
	// rotate array to the right [1,2,3,4] => [4,1,2,3]
    class Program
    {
        static void Main(string[] args)
        {
            var result = solution(new int [] { 1, 2, 3, 4 }, 2);
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }
            
            Console.ReadLine();
        }

        public static int[] solution(int[] A, int K)
        {
            if(A.Length == K)
            {
                return A;
            }

            var rotated = new int[A.Length];
            A.CopyTo(rotated, 0);

            for (int i = 0; i < K; i++)
            {
                rotated = rotateArrayByOne(rotated);
            }

            return rotated;
        }

        public static int [] rotateArrayByOne (int[] A)
        {
            var rotated = new int[A.Length];
            rotated[0] = A[A.Length-1];

            for(int i = 0; i<A.Length-1; i++)
            {
                rotated[i+1] = A[i];
            }

            return rotated;
        }
    }
}
