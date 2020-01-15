using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
 A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

class Solution { public int solution(int X, int[] A); }

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X]. 
 */

namespace FrogRiverOne
{
    class Program
    {
        static void Main(string[] args)
        {
            var arr = new int [] {1,3,1,4,2,3,5,4};
            var arr2 = new int[] { 1, 2, 3 };
            Console.WriteLine(solution(5, arr));
            Console.WriteLine(solution(3, arr2));
            Console.ReadLine();
        }

        public static int solution(int X, int[] A)
        {
           
            var totalTime = 0;
            var currPos = 0;
            var goal = X+1;
            bool goalReached = false;

            var filledWithLeaves = new bool [X+1];
            var filledLeaves = 0;

            for (int i = 0; i < A.Length; i++)
            {
                var sec = i;
                var pos = A[i];
                //Console.WriteLine("sec:" + i);
                //Console.WriteLine("pos" + pos);

                if (!filledWithLeaves[pos]) { 
                    filledWithLeaves[pos] = true;
                    filledLeaves++;
                }

                if(currPos == (pos - 1) || filledWithLeaves[currPos + 1])
                {
                    currPos++;
                    //Console.WriteLine("advancing to: " + currPos);
                }

                if(filledLeaves == filledWithLeaves.Length-1)
                {
                    //Console.WriteLine("all leaves are filled");
                    goalReached = true;
                    break;
                }
                //Console.WriteLine("-------------");

                totalTime++;

            }

            if (goalReached || currPos == goal -1)
            {
                return totalTime;
            }
            else
            {
                return -1;
            }
        }
    }
}
