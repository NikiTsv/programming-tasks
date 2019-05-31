using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaxCounters
{
    class Program
    {
        static void Main(string[] args)
        {
            var result = solution(5, new int [] { 3, 4, 4, 6, 1, 4, 4 });
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }

            Console.ReadLine();

        }

        public static int[] solution(int N, int[] A)
        {
            
            var countersArr = new int [N];
            var currMax = 0;
            var lastMaxSet = 0;

            for (int i = 0; i < N; i++)
            {
                countersArr[i] = 0;
            }

            if (A.Length == 0)
            {
                return countersArr;
            }

            for (int K = 0; K < A.Length; K++)
            {
                var X = A[K];
                var counterIndex = X - 1;
                if (X<=N && X>= 1)
                {
                    if (countersArr[counterIndex] < lastMaxSet)
                    {
                        countersArr[counterIndex] = lastMaxSet;
                    }

                    countersArr[counterIndex]++;
                    if (currMax < countersArr[counterIndex])
                    {
                        currMax = countersArr[counterIndex];
                    }
                }
                else if (A[K] == N + 1)
                {
                    lastMaxSet = currMax;
                }
            }

            for (int i = 0; i < countersArr.Length; i++)
            {
                var val = countersArr[i];
                if(val < lastMaxSet)
                {
                    countersArr[i]= lastMaxSet;
                }
            }

            return countersArr;
        }
    }
}
