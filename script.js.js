document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query === '') {
        alert('검색어를 입력해주세요!');
        return;
    }
    
    const encodedQuery = encodeURIComponent(query);
    
    // 포털 보안 우회 명령어(&igu=1)가 포함된 최종 주소
    const naverURL = `https://search.naver.com/search.naver?query=${encodedQuery}`;
    const youtubeURL = `https://www.youtube.com/results?search_query=${encodedQuery}`;
    const googleURL = `https://www.google.com/search?igu=1&q=${encodedQuery}`;
    
    document.getElementById('naverFrame').src = naverURL;
    document.getElementById('youtubeFrame').src = youtubeURL;
    document.getElementById('googleFrame').src = googleURL;
    
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.classList.remove('hidden');
});