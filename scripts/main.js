const block = document.querySelector(".white-block");
const text = document.querySelector(".white-block__text");

setTimeout(()=> {
    block.classList.add('start');
    setTimeout(() => {
        block.classList.add('rotate90');
        setTimeout(() =>{
            block.classList.add('rotate180');
            setTimeout(() => {
                block.classList.remove('start');
                setTimeout(() => {
                    text.innerHTML = "С днём рождения!";
                    block.classList.remove('rotate90');
                    block.classList.remove('rotate180');
                    block.classList.add('left');
                    setTimeout(() => {
                        block.classList.add('left-start');

                        setTimeout(()=> {
                            block.classList.add('down');

                            setTimeout(()=> {
                                text.innerHTML = "С твоими ";
                                block.classList.remove('down')
                                block.classList.add('up')

                                setTimeout(() => {
                                    text.textContent = text.textContent + 5;
                                    setTimeout(() => {
                                        text.textContent = text.textContent + 0;
                                        

                                        setTimeout(() => {
                                            text.textContent = text.textContent + '?'


                                            setTimeout(() => {
                                                text.textContent = text.textContent.substring(0,text.textContent.length-1);
                                                setTimeout(() => {
                                                    text.textContent = text.textContent.substring(0,text.textContent.length-1);
                                                    setTimeout(() => {
                                                        text.textContent = text.textContent.substring(0,text.textContent.length-1);
                                                        setTimeout(() => {
                                                            text.textContent = text.textContent + 2;
                                                            setTimeout(() => {
                                                                text.textContent = text.textContent + 5;
                                                                setTimeout(() => {
                                                                    text.textContent = text.textContent + ' ';
                                                                    setTimeout(() => {
                                                                        text.textContent = text.textContent + 'л';
                                                                        setTimeout(() => {
                                                                            text.textContent = text.textContent + 'е';
                                                                            setTimeout(() => {
                                                                                text.textContent = text.textContent + 'т';
                                                                                setTimeout(() => {
                                                                                    text.textContent = text.textContent + 'и';
                                                                                    setTimeout(() => {
                                                                                        text.textContent = text.textContent + 'е';
                                                                                        setTimeout(() => {
                                                                                            text.textContent = text.textContent + 'м';
                                                                                            setTimeout(() => {
                                                                                                text.textContent = text.textContent + '!';
                                                                                                setTimeout(() => {
                                                                                                    text.textContent = text.textContent + ' ';
                                                                                                    setTimeout(() => {
                                                                                                        text.textContent = text.textContent + ':';
                                                                                                        setTimeout(() => {
                                                                                                            text.textContent = text.textContent + ')';
                                                                                                        },200);
                                                                                                    },200);
                                                                                                },200);
                                                                                            },200);
                                                                                        },200);
                                                                                    },200);
                                                                                },200);
                                                                            },200);
                                                                        },400);
                                                                    },200);
                                                                },200);
                                                            },200);
                                                        },300);
                                                    },100);
                                                },100);
                                            },1000);
                                        },300);
                                    },400);
                                },1000);
                            },1500);
                        },2000);
                    },500);
                },1200);
            },300);
        },300);
    },1000);
},1000);