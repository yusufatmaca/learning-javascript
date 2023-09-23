let c = '0';
function update(x) {
    if (x === 'c') {
        c = '0';
    }
    else {
        if (c === '0' && x !== '0') {
            if (x === '.') {
                c += x;
            }
            else {
                c = x;
            }
        }
        else if (c === '0' && x === '0') {
            c = x;
        }
        else {
            c += x;
        }
    }
    document.querySelector('.result').innerHTML = c;
}

function calculate() {
    if ((c.includes('+')) || (c.includes('-')) || (c.includes('*')) || (c.includes('/'))) {
        f = eval(c);
        document.querySelector('.result').innerHTML = c + ' = ' + f;
        c = f;
    } else {
        document.querySelector('.result').innerHTML = c;
        }
    }

function disable(operand) {
    document.querySelector('.' + operand).disabled = true;

}
function enable(operand) {
    document.querySelector('.' + operand).disabled = false;
}