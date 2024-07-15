
    let a = 5;

    function fact(num) {
        let sum = 1;
        for (let x = 1; x <= num; x++) {
            sum *= x;
        }

        console.log(sum);
    }

    fact(a);
