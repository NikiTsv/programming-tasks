using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
 * Check whether array A is a permutation.

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range[1..100, 000];
each element of array A is an integer within the range[1..1, 000, 000, 000].
*/

namespace PermCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(solution(new int [] {1,2,3,4 }));
            Console.WriteLine(solution(new int[] { 1, 2, 3, 5 }));
            Console.WriteLine(solution(new int[] { 1, 2, 3, 100000 }));
            Console.WriteLine(solution(new int[] { 1, 2 }));
            Console.WriteLine(solution(new int[] { 1 }));
            Console.ReadLine();
        }

        public static int solution(int[] A)
        {
            if (A.Length == 0)
            {
                return 0;
            }

            var maxVal = A.Max();

            if(A.Length < maxVal)
            {
                return 0;
            }

            var arr = new bool [A.Length];

            foreach (var item in A)
            {
                arr[item-1] = true;
            }

            for (int i = 0; i < arr.Length; i++)
            {
                if (!arr[i]) {
                    return 0;
                }
            }

            return 1;
        }
    }
}
