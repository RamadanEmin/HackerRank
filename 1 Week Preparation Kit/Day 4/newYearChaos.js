/*
  It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
   Each person wears a sticker indicating their initial position in the queue from 1 to n.
 
  Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
  One person can bribe at most two others.
  Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
  Example:
  q=[1,2,3,5,4,6,7,8]
  If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.
  q=[4,1,2,3]
  Person 4 had to bribe 3 people to get to the current position. Print Too chaotic
 */

function minimumBribes(q) {
    let totalBribes = 0;

    for (let currentPos = 0; currentPos < q.length; currentPos++) {
        const originalPos = q[currentPos] - 1;

        const diff = originalPos - currentPos;
        if (diff > 2) {
            console.log('Too chaotic');
            return 'Too chaotic';
        }

        for (let j = Math.max(0, originalPos - 1); j < currentPos; j++) {
            const startPosOfForwardPerson = q[j] - 1;
            if (startPosOfForwardPerson > originalPos) {
                totalBribes++;
            }
        }
    }

    console.log(totalBribes);
    return totalBribes;
}