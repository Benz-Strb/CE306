let product_price = 12500;
let discount_percent = 20;
let after_dis = product_price-((discount_percent/100)*product_price);

if (after_dis <= 0) {
    console.log("Total: 0 ฿");
} else if (after_dis <= 500) {
    after_dis += 50
    console.log(`Total: ${after_dis} ฿`)
} else {
    after_dis = after_dis-((10/100)*after_dis)
    console.log(`Total: ${after_dis} ฿`)
}