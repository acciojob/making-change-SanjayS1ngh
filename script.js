const makeChange = (c) => {
    const ans = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    };

    while (c >= 25) {
        ans.q++;
        c -= 25;
    }

    while (c >= 10) {
        ans.d++;
        c -= 10;
    }

    while (c >= 5) {
        ans.n++;
        c -= 5;
    }

    while (c >= 1) {
        ans.p++;
        c--;
    }

    return ans;
};