<template>
    <!-- Sidebar -->
    <aside class="sidebar__sidebar">
        <div class="left-flex-container flex-item">
            <div className="sidebar_section">
                <ul className="ul">
                    <li>
                        <a href="/" className="active">
                            <ion-icon class="list-icon" name="home-outline"></ion-icon>
                            <span> Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon class="list-icon" name="person-outline"></ion-icon>
                            <span> Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon name="bookmarks-outline"></ion-icon>
                            <span> Bookmark</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ion-icon name="cog-outline"></ion-icon>
                            <span> Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ion-icon name="grid-outline"></ion-icon>
                            <span> More</span>
                        </a>
                    </li>
                </ul>
                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <ion-icon name="boat-outline"></ion-icon>
                        </div>
                    </div>
                    <span>Flow</span>
                </button>

            </div>
        </div>
    </aside>
</template>