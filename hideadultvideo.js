async function loadTextFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`0xERR: HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const array = text.split('\n').map(line => line.trim()).filter(line => line);
        return array;
    } catch (error) {
        console.error('0xERR: Load File Error: ', error);
    }
}

async function getData(url) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get('dataArray', (storedData) => {
            if (chrome.runtime.lastError) {
                console.error('Error accessing storage:', chrome.runtime.lastError);
                reject(chrome.runtime.lastError);
            }
            if (storedData.dataArray) {
                resolve(storedData.dataArray);
            } else {
                loadTextFile(url).then((dataArray) => {
                    chrome.storage.local.set({ dataArray }, () => {
                        if (chrome.runtime.lastError) {
                            console.error('Error setting storage:', chrome.runtime.lastError);
                            reject(chrome.runtime.lastError);
                        }
                        resolve(dataArray);
                    });
                }).catch(reject);
            }
        });
    });
}

async function checkUrlInArray(dataArray) {
    const currentUrl = window.location.href;
	const domain = new URL(currentUrl).hostname;
	const domain_ = domain.startsWith('www.') ? domain.slice(4) : domain;
	const matches = dataArray
	.map(item=>item.trim())
	.filter(item => domain_ === item);
    if (matches.length > 0) {
	    create_canvas_element();
		animate();
		blockDisplay();
		return(true);
    } else {
		return(false);
    }
}
async function blockDisplay(){
	var hdv1 = document.createElement("div");
	hdv1.id="0xblckwindow1337165892";
	hdv1.style.width="100%"; 
	hdv1.style.height="100%";
	hdv1.style.zIndex="999999999";
	hdv1.style.display="flex";
	hdv1.style.justifyContent="center";
	hdv1.style.alignItems="top";
	hdv1.style.backgroundColor="rgb(0,0,0,30%)";
	hdv1.style.cursor="not-allowed";
	var text2=document.createElement("p");
	text2.style.color="lightgreen";
	text2.style.fontSize="24px";
	text2.style.fontWeight="bold"; 
	text2.style.textAligin="center";
	text2.style.position="absolute";
	text2.style.zIndex="999999999";
	text2.style.top="45%";
	text2.textContent="¡ⵉRRΩR ⵖⴲვ: ΦΩRあIΔΔⵉΝ ΦΩR ΥΩU, あΑあΥ!";
	text2.style.cursor="not-allowed"
	text2.style.padding="30px";
	text2.style.margin="30px";
	text2.style.backgroundColor = 'rgba(0, 128, 0, 0.25)'; // Полупрозрачный зеленый
    text2.style.borderRadius = '12px';
	hdv1.append(text2);
	document.body.append(hdv1);
	document.title = "¡Blocked! - Adult content";
}
	var matrixCanvas = document.createElement("canvas");
    const matrixCtx = matrixCanvas.getContext('2d');
	matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
	const columns = Math.floor(matrixCanvas.width / 20);
    const drops = Array(columns).fill(1);
    const symbols = 
        'ابجحخدذرزسشصضطظعغفقكلمنهوي0123456789' + 
        'ანბანიაბგდევზთიკლმნოპჟრსტუფქღყშჩცძტუფქ' + 
        'ΓαλλικάΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ' + 
        '你好你我他是的在这有个吗吗不一个二三四五六七八九十百千万个' + 
        'ⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿⵀⵁⵂⵃⵄⵅⵆⵇⵈⵉⵊⵋⵌⵍⵎⵏⵐⵑⵒⵓⵔⵕⵖⵗⵘⵙⵚⵛⵜⵝⵞⵟⵠⵡⵢⵣⵤⵥⵦⵧⵯ⵰'+ 
		'カキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'+
		'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'+
		'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՅՀՂՑՎՓՔՕՖ'+
		'กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟมยรลวศสหฬอฮ'+
		'अआइईउऊऋएऐओऔअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह'+
		'абвгҕдежзийкҡлмнңопрстуфхыэюя';
	
function create_canvas_element(){
	matrixCanvas.id="matrix_0x1337541269";
	matrixCanvas.style.position="fixed"
	matrixCanvas.style.width = "100%";
    matrixCanvas.style.height = "100%";
	matrixCanvas.style.top="0";
	matrixCanvas.style.left="0";
	matrixCanvas.style.zIndex="999999990";
	matrixCanvas.style.display="block";
	matrixCanvas.style.cursor="not-allowed";
	document.body.append(matrixCanvas);
   }
	
    function drawMatrix() {
        matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        matrixCtx.fillStyle = '#0F0';
        matrixCtx.font = '20px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
            matrixCtx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 0.75;
        }
    }


async   function animate() {
		drawMatrix();
        requestAnimationFrame(animate);
    }

const url = 'https://raw.githubusercontent.com/BlackChaose/hide_adultVideo/refs/heads/main/blacklist.lst';
getData(url).then(dataArray => {
	checkUrlInArray(dataArray);
});



