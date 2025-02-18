//avg
var h = document.getElementById("h")
var ab = document.getElementById("ab")
var avg_cal = document.getElementById("avg-cal")
var avg_ans = document.getElementById("avg-ans")

avg_cal.addEventListener("click", function(){
    var avg = (int(h.value) / int(ab.value)).toFixed(3)
    avg_ans.innerHTML = avg
});

//obp
var bb = document.getElementById("bb")
var hb = document.getElementById("hb")
var sf = document.getElementById("sf")
var obp_cal = document.getElementById("obp-cal")
var obp_ans = document.getElementById("obp-ans")

obp_cal.addEventListener("click", function(){
    var obp = ((int(h.value) + int(bb.value) + int(hb.value)) / (int(ab.value) + int(bb.value) + int(hb.value) + int(sf.value))).toFixed(3)
    obp_ans.innerHTML = obp
});
function int(n){
    return parseInt(n)
}

//slg
var b1 = document.getElementById("1b")
var b2 = document.getElementById("2b")
var b3 = document.getElementById("3b")
var hr = document.getElementById("hr")
var slg_cal = document.getElementById("slg-cal")
var slg_ans = document.getElementById("slg-ans")

slg_cal.addEventListener("click", function(){
    var slg = (((int(b1.value) + 2*int(b2.value) + 3*int(b3.value)) + 4*int(hr.value))/ (int(ab.value))).toFixed(3)
    slg_ans.innerHTML = slg
});

//era
var er = document.getElementById("er")
var ip = document.getElementById("ip")
var era_cal = document.getElementById("era-cal")
var era_ans = document.getElementById("era-ans")

era_cal.addEventListener("click", function(){
    var era = (9*int(er.value) / f(ip.value)).toFixed(2)
    era_ans.innerHTML = era
});

function f(n){
    return parseFloat(n)
}

//whip
var h_p = document.getElementById("h-p")
var bb_p = document.getElementById("bb-p")
var whip_cal = document.getElementById("whip-cal")
var whip_ans = document.getElementById("whip-ans")

whip_cal.addEventListener("click", function(){
    var whip = ((int(h_p.value) + int(bb_p.value)) / f(ip.value)).toFixed(2)
    whip_ans.innerHTML = whip
});

function f(n){
    return parseFloat(n)
}

//isop
var slg_ = document.getElementById("slg")
var avg_ = document.getElementById("avg")
var isop_cal = document.getElementById("isop-cal")
var isop_ans = document.getElementById("isop-ans")

isop_cal.addEventListener("click", function(){
    var isop = (f(slg_.value) - f(avg_.value)).toFixed(3)
    isop_ans.innerHTML = isop
});

//ops
var obp_ = document.getElementById("obp")
var ops_cal = document.getElementById("ops-cal")
var ops_ans = document.getElementById("ops-ans")

ops_cal.addEventListener("click", function(){
    var ops = (f(obp_.value) + f(slg_.value)).toFixed(3)
    ops_ans.innerHTML = ops
});

//opsp
var obp_av = document.getElementById("av-obp")
var slg_av = document.getElementById("av-slg")
var opsp_cal = document.getElementById("opsp-cal")
var opsp_ans = document.getElementById("opsp-ans")

opsp_cal.addEventListener("click", function(){
    var opsp = ((f(obp_.value)/f(obp_av.value) + f(slg_.value)/f(slg_av.value) - 1)*100).toFixed(3)
    opsp_ans.innerHTML = opsp
});

//erap
var era_ = document.getElementById("era")
var era_av = document.getElementById("av-era")
var erap_cal = document.getElementById("erap-cal")
var erap_ans = document.getElementById("erap-ans")

erap_cal.addEventListener("click", function(){
    var erap = ((f(era_av.value)/f(era_.value))*100).toFixed(2)
    erap_ans.innerHTML = erap
});

//s
var p_ = document.getElementById("p")
var p_strike = document.getElementById("p-strike")
var s_cal = document.getElementById("s-cal")
var s_ans = document.getElementById("s-ans")

s_cal.addEventListener("click", function(){
    var s = (f(p_strike.value)/(f(p.value) - f(p_strike.value))).toFixed(1)
    s_ans.innerHTML = s
});

//s%
var n_h = document.getElementById("n-h")
var s_ = document.getElementById("s")
var so_cal = document.getElementById("so-cal")
var so_ans = document.getElementById("so-ans")

so_cal.addEventListener("click", function(){
    var so = (f(s_.value)/(f(n_h.value)) * 100).toFixed(1)
    so_ans.innerHTML = so
});

//bb%
var b = document.getElementById("b")
var bbp_cal = document.getElementById("bbp-cal")
var bbp_ans = document.getElementById("bbp-ans")

bbp_cal.addEventListener("click", function(){
    var bbp = (f(b.value)/(f(n_h.value)) * 100).toFixed(1)
    bbp_ans.innerHTML = bbp
});

//bb%
var hr_ = document.getElementById("hr-")
var hrp_cal = document.getElementById("hrp-cal")
var hrp_ans = document.getElementById("hrp-ans")

hrp_cal.addEventListener("click", function(){
    var hrp = (f(hr_.value)/(f(n_h.value)) * 100).toFixed(1)
    hrp_ans.innerHTML = hrp
});

//fip
var bb_fip = document.getElementById("fip-bb")
var hb_fip = document.getElementById("fip-hb")
var hr_fip = document.getElementById("fip-hr")
var so_fip = document.getElementById("fip-so")
var ip_fip = document.getElementById("fip-ip")
var fip_cal = document.getElementById("fip-cal")
var fip_ans = document.getElementById("fip-ans")

fip_cal.addEventListener("click", function(){
    var fip = ((((f(bb_fip.value) + f(hb_fip.value))*3 + f(hr_fip.value)*13 - f(so_fip.value)*2) / (f(ip_fip.value))) + 3.2).toFixed(2)
    fip_ans.innerHTML = fip
});