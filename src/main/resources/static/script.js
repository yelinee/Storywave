// 게시글 삭제 모달
function postModal(){
    const deleteModal = document.querySelector('#deleteModal'); // 삭제 모달
    deleteModal.style.display = 'flex';
}

function closePostModal(){
    const deleteModal = document.querySelector('#deleteModal');
    deleteModal.style.display = 'none';
}

// 댓글 수정 모달 창 열기
function openModal(){
    const commentUpdateModal = document.querySelector('#commentUpdateModal');
    commentUpdateModal.style.display = 'flex';
}
// 댓글 수정 모달 창 닫기
function closeModal() {
    const commentUpdateModal = document.querySelector('#commentUpdateModal');
    commentUpdateModal.style.display = 'none';
}

// 댓글 삭제 모달 창 열기
function openCommentModal() {
    const commentDeleteModal = document.querySelector('#commentDeleteModal');
    commentDeleteModal.style.display = 'flex';
}

// 댓글 삭제 모달 창 닫기
function closeCommentModal(){
    const commentDeleteModal = document.querySelector('#commentDeleteModal');
    commentDeleteModal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', (event) => {
    getAllComment();
});

// thumbs 수 카운트
function countThumbs(){
    let hasClicked = false;

    document.getElementById('thumbs_btn').onclick = function () {
        if (!hasClicked) {
            const thumbs_num = document.getElementById('thumbs_num');
            thumbs_num.innerHTML = Number(thumbs_num.innerHTML) + 1;
            hasClicked = true;
        }
    }
}