function test(){
    let a = parseFloat(prompt('Nhap gia tri a: '));
    let b = parseFloat(prompt('Nhap gia tri b: '));
    let c = a % b;
    if (c == 0) {
        alert('a la boi so so cua b')
    }
    else{
        alert('a khong la boi so cua b')
    }
}


