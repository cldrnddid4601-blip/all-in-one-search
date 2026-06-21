document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const query = document.getElementById('searchInput').value.trim();
    if (query === '') {
        alert('검색어를 입력해주세요!');
        return;
    }
    
    const encodedQuery = encodeURIComponent(query);
    
    // 🟢 네이버: 다른 사람도 볼 수 있게 모바일 주소로 우회
    if (portalStatus.naver.on && !portalStatus.naver.locked) {
        document.getElementById('naverFrame').src = `https://m.search.naver.com/search.naver?query=${encodedQuery}`;
    }
    
    // 🔴 유튜브: 다른 사람도 볼 수 있게 임베드 검색 주소로 우회
    if (portalStatus.youtube.on && !portalStatus.youtube.locked) {
        document.getElementById('youtubeFrame').src = `https://www.youtube.com/embed?listType=search&list=${encodedQuery}`;
    }
    
    // 🔵 구글: 기존 우회 주소 유지 (정상 작동)
    if (portalStatus.google.on && !portalStatus.google.locked) {
        document.getElementById('googleFrame').src = `https://www.google.com/search?igu=1&q=${encodedQuery}`;
    }

    // 🟣 제미나이: 타인은 iframe 차단되므로 자동으로 새 창을 열어주도록 보완
    if (portalStatus.gemini.on && !portalStatus.gemini.locked) {
        window.open(`https://gemini.google.com/app?q=${encodedQuery}`, '_blank');
        // iframe 내부에는 안내 문구 표시
        document.getElementById('geminiFrame').srcdoc = "<h4 style='text-align:center; margin-top:50px; color:#666;'>제미나이는 보안 정책상 새 탭에서 열립니다!</h4>";
    }
});
