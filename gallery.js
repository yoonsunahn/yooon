// gallery.js 전체 코드 (Work 페이지 정보 로직 추가)

function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var modalTitle = document.getElementById("modalTitle");
    
    // 1. 모달을 보이도록 설정
    modal.style.display = "block";
    
    // 2. 10ms 후 opacity를 1로 설정하여 CSS transition이 작동하도록 합니다.
    setTimeout(function() {
        modal.style.opacity = '1';
    }, 10); 

    modalImg.src = imageSrc;

    // ----------------------------------------------------
    // 이미지 소스에 따라 제목을 설정하는 로직
    // ----------------------------------------------------
    var titleText = "";
    
    // index.html 이미지 정보
    if (imageSrc.includes("images/ha.jpg")) {
        titleText = "Frances ha . 2012년 . Noah baumbach";
    } else if (imageSrc.includes("images/cover.png")) {
        titleText = "note . 2019년 . 스캔";
    } else if (imageSrc.includes("images/moon.png")) {
        titleText = "closet . 2024년 . 일러스트";
    } else if (imageSrc.includes("images/free.jpeg")) {
        titleText = "somewhere . 2024년 . 핀터레스트";
    } else if (imageSrc.includes("images/train.jpeg")) {
        titleText = "밤 기차역 풍경";
    } else if (imageSrc.includes("images/clock.png")) {
        titleText = "멈춘 시간의 시계";
    } else if (imageSrc.includes("images/winter.png")) {
        titleText = "겨울나무 시리즈";
    } else if (imageSrc.includes("images/diary.png")) {
        titleText = "여행 일기 조각";
    } else if (imageSrc.includes("images/blu.jpeg")) {
        titleText = "푸른 색조의 초상";
    } else if (imageSrc.includes("images/note.png")) {
        titleText = "오래된 메모";
    } else if (imageSrc.includes("images/road.png")) {
        titleText = "끝없는 도로";
    } else if (imageSrc.includes("images/wa.png")) {
        titleText = "물속의 그림자";
    } 
    // 👇 Work.html 이미지 정보 추가
    else if (imageSrc.includes("kaywon.png")) {
        titleText = "계원 예대 프로젝트 . 2023년 . 포스터 디자인";
    } else if (imageSrc.includes("work-2.jpg")) {
        titleText = "그래픽 디자인 . 2022년 . 타이포그래피";
    } else if (imageSrc.includes("work-3.jpg")) {
        titleText = "웹사이트 레이아웃 . 2024년 . UX/UI 스케치";
    } else if (imageSrc.includes("work-4.jpg")) {
        titleText = "제품 패키지 . 2023년 . 렌더링";
    }
    // ----------------------------------------------------
    else {
        titleText = "Yoon sun Ahn . Untitled (미정)";
    }

    modalTitle.textContent = titleText; 
}

function closeModal(event) {
    var modal = document.getElementById("imageModal");
    
    if (event.target == modal || event.target.classList.contains('close')) {
        modal.style.opacity = '0';
        
        setTimeout(function() {
            modal.style.display = "none";
        }, 300); 
    }
}
// gallery.js 파일의 맨 끝에 추가

/**
 * 배열의 요소를 무작위로 섞는 Fisher-Yates (셔플) 알고리즘
 * @param {Array} array 섞을 배열
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * index.html의 갤러리 이미지 순서를 무작위로 섞어 배치하는 함수
 */
function shuffleGallery() {
    // 갤러리 컨테이너 요소를 가져옵니다.
    const gallery = document.querySelector('.art-display-row');
    
    // 갤러리 내의 모든 이미지 요소들을 가져옵니다.
    if (gallery) {
        // HTML 컬렉션을 배열로 변환
        let images = Array.from(gallery.children); 
        
        // 이미지 배열의 순서를 무작위로 섞습니다.
        shuffleArray(images);
        
        // 섞인 순서대로 갤러리 컨테이너에 다시 추가합니다.
        // 기존의 자식 노드 순서가 변경됩니다.
        images.forEach(image => {
            gallery.appendChild(image);
        });
    }
}