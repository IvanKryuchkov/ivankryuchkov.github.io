	let randtext = document.getElementById("rand");
	let phrase = 'I\'m a front-end (and wannabe full-stack) developer'.split('');
	let str = [];
	let j = 0;
	let chars = 
	['!','@','#','$','%','^','&','*','(',')','{','}','_','+','-','=','<','>','?','~','№','[',']'];
	let transformRandomText = setInterval(function(){ 
		if (j==phrase.length) {clearInterval(transformRandomText)}
    	for (let i = 0; i<phrase.length; i++) {
    		if (str[i]!=phrase[i]) {
				str[i]=chars[Math.floor(Math.random()*chars.length)];
			}
			randtext.innerText = str.join('');
		}
		str[j] = phrase[j];
		j++;
	}, 27); 