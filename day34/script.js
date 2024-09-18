let main=document.querySelector(".main");

function view()
{

    let first=document.createElement('div');
    first.setAttribute('class','first');
    main.append(first)

    let box1=document.createElement('div');
    box1.setAttribute('class','box1');
    let img1=document.createElement('div');
    img1.setAttribute('class','img1');
    let text1=document.createElement('div');
    text1.setAttribute('class','text1')
    let p1=document.createElement('p');
    p1.setAttribute('id','par1');
    let p2=document.createElement('p');
    p2.setAttribute('id','par2');
    let p1_t1=document.createTextNode('I am Product');
    let p2_t1=document.createTextNode('$19.99');
    p1.append(p1_t1);
    p2.append(p2_t1);
    text1.append(p1,p2);
    box1.append(img1,text1);

    let box2=document.createElement('div');
    box2.setAttribute('class','box2');
    let img2=document.createElement('div');
    img2.setAttribute('class','img2');
    let text2=document.createElement('div');
    text2.setAttribute('class','text2');
    let p3=document.createElement('p');
    p3.setAttribute('id','par1');
    let p4=document.createElement('p');
    p4.setAttribute('id','par2');
    let p3_t2=document.createTextNode('I am Product');
    let p4_t2=document.createTextNode('$19.99');
    p3.append(p3_t2);
    p4.append(p4_t2);
    text2.append(p3,p4);
    box2.append(img2,text2)

    let box3=document.createElement('div');
    box3.setAttribute('class','box3');
    let img3=document.createElement('div');
    img3.setAttribute('class','img3');
    let text3=document.createElement('div');
    text3.setAttribute('class','text3');
    let p5=document.createElement('p');
    p5.setAttribute('id','par1');
    let p6=document.createElement('p');
    p6.setAttribute('id','par2');
    let p5_t3=document.createTextNode('I am Product');
    let p6_t3=document.createTextNode('$19.99');
    p5.append(p5_t3);
    p6.append(p6_t3);
    text3.append(p5,p6);
    box3.append(img3,text3)

    let box4=document.createElement('div');
    box4.setAttribute('class','box4');
    let img4=document.createElement('div');
    img4.setAttribute('class','img4');
    let text4=document.createElement('div');
    text4.setAttribute('class','text4');
    let p7=document.createElement('p');
    p7.setAttribute('id','par1');
    let p8=document.createElement('p');
    p8.setAttribute('id','par2');
    let p7_t4=document.createTextNode('I am Product');
    let p8_t4=document.createTextNode('$19.99');
    p7.append(p7_t4);
    p8.append(p8_t4);
    text4.append(p7,p8);
    box4.append(img4,text4)

    let box5=document.createElement('div');
    box5.setAttribute('class','box5');
    let img5=document.createElement('div');
    img5.setAttribute('class','img5');
    let text5=document.createElement('div');
    text5.setAttribute('class','text5')
    box5.append(img5,text5);
    let p9=document.createElement('p');
    p9.setAttribute('id','par1');
    let p10=document.createElement('p');
    p10.setAttribute('id','par2');
    let p9_t5=document.createTextNode('I am Product');
    let p10_t5=document.createTextNode('$19.99');
    p9.append(p9_t5);
    p10.append(p10_t5);
    text5.append(p9,p10);

    first.append(box1,box2,box3,box4,box5)

}

view()

