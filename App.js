function changeTab(tabIndex) {
    
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });


    let selectedTab = document.getElementById('tab' + (tabIndex + 1));
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
  }