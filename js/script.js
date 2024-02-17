const cards = document.getElementsByClassName('card')
let count = 1;
let sum = 0;
for(const card of cards) {
    card.addEventListener('click',function() {
        const cardTitle = card.children[1].children[1].innerText;
        const price = card.children[1].children[2].childNodes[1].innerText;
        const priceNumber = parseInt(price);
        
        const totalPriceElelment = document.getElementById('total-price');
        const totalPrice = totalPriceElelment.innerText;
        let totalPriceNumber = parseInt(totalPrice);
      
        sum = sum = totalPriceNumber + priceNumber;
        totalPriceElelment.innerText = sum.toFixed(2);

        const titleAdd = document.getElementById('title-add');
        const li = document.createElement('li');
    
        li.classList.add('font-semibold')
        li.innerText = `${count++}. ${cardTitle}`;
        titleAdd.appendChild(li);
        
        // total price

       
        
    })
}

// set the coupon code on the input box by clicking
document.getElementById('coupon-btn').addEventListener('click', function(e) {
        const coupon = e.target.innerText;
        setInnerText('set-coupon-input', coupon)
})
// apply coupon code on the discount price
document.getElementById('apply-btn').addEventListener('click', function() {
    const couponValue = document.getElementById('set-coupon-input').value;
    if(couponValue === 'SELL200') {
        
        let discountPrice = sum / 100 * 20;
        const discountPriceElement = document.getElementById('discount-price');
        const totalElement = document.getElementById('total');
        discountPriceElement.innerText = discountPrice.toFixed(2)
        const total = sum - discountPrice;
        totalElement.innerText = total.toFixed(2);
    
    }
})
