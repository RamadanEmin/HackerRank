/*
Jesse loves cookies and wants the sweetness of some cookies to be greater than value k. 
To do this, two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:
sweetness = (1 x least sweet cookie + 2 x 2nd least sweet cookie)
This occurs until all the cookies have a sweetness >=k
Given the sweetness of a number of cookies, determine the minimum number of operations required. If it is not possible, return -1
 */

const cookies = (k, A) => {
    let count = 0;
    let l = A.length;
    let cookies = new Map();
    let flagK = false;
    let flag = false;
    let KEY;
    let limit = Math.ceil(k / 3);
    let last1 = Number.MAX_VALUE;
    let rest = 0;
    let last2;

    for (let i = 0; i < l; i++) {
        if (A[i] == 0) {
            count++;
            continue;
        }

        if (A[i] < k) {
            if (A[i] >= limit) {
                if (A[i] < last1) last1 = A[i];
                rest++;
            } else {
                if (cookies.has(A[i])) cookies.set(A[i], cookies.get(A[i]) + 1);
                else cookies.set(A[i], 1);
            }
        } else flagK = true;
    }

    if (cookies.size == 0) return 0;

    for (let i = 1; i < limit; i++) {
        if (cookies.has(i)) {
            let value = cookies.get(i);

            if (flag) {
                flag = false;
                value--;
                KEY += i * 2;
                if (KEY < k) {
                    if (cookies.has(KEY)) cookies.set(KEY, cookies.get(KEY) + 1);
                    else cookies.set(KEY, 1);
                } else flagK = true;
            }

            if (value % 2 == 1) {
                flag = true;
                value--;
                KEY = i;
                count++;
            } else {
            }

            if (value != 0) {
                let v2 = value / 2;
                const i3 = i * 3;
                if (i3 < k) {
                    if (cookies.has(i3)) cookies.set(i3, cookies.get(i3) + v2);
                    else cookies.set(i3, v2);
                } else flagK = true;
                count += v2;
            }
            last2 = i;
            cookies.delete(i);
        }
    }

    if (flag) {
        count--;
        rest++;
    }

    cookies.forEach((val, ki) => {
        if (ki < last1) last1 = ki;
        rest += val;
    });

    if (rest >= 2) flagK = true;
    if (last2 + last1 * 2 >= k || flag == false) count += Math.ceil(rest / 2);
    else count += Math.ceil((rest + 1) / 2);

    if (flagK == false) return -1;
    else return count;
};