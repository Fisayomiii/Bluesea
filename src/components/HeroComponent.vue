<template>
    <div class="sidebar">
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

        <!-- Main -->
        <main class="sidebar__main">
            <div class="home">
                <h1>Bluesea.</h1>
                <img src="../assets/Favico.png" alt="Bluesky" height="30">
            </div>

            <div class="post-tweet">
                <form action="">
                    <div class="form-group-1">
                        <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg"
                            alt="profile-pics">
                        <textarea placeholder="Say your mind..."></textarea>
                    </div>
                    <div class="form-group-2">
                        <div class="post-icons">
                            <ion-icon name="mic-outline" title="Use Mic"></ion-icon>
                            <ion-icon name="image-outline" title="Add Image"></ion-icon>
                            <ion-icon name="happy-outline" title="Use Emojis"></ion-icon>
                        </div>
                        <button class="btn" type="submit">Flow</button>
                    </div>
                </form>
            </div>

            <!-- <div class="post">
                <div class="left-column">
                    <img class="profile-image" src="../assets/R1363_MrBeast_2c.jpg">
                </div>
                <div class="right-column">
                    <article class="top-row">
                        <header class="post-header">
                            <div class="user-names">
                                <hi class="full-name">Fisayomi</hi>
                                <p class="user-name">@999tweets_her</p>
                                <p class="time">. 1 Hour Ago</p>
                            </div>
                            <div class="details">
                                <ion-icon name="grid-outline"></ion-icon>
                            </div>
                        </header>
                        <div class="user-content">
                            <p>Open source icons. Lovingly hand-crafted. Premium designed icons for use in web, iOS,
                                Android,
                                and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and
                                built
                                by Ionic.
                            </p>
                        </div>
                        <img src="../assets/R1363_MrBeast_2c.jpg" alt="Img" />
                    </article>
                    <div class="bottom-row">
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>
                </div>
            </div> -->


            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div>
                            <div>
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div>
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Post -->
            <div class="tweets">
                <div class="user-pics">
                    <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
                </div>
                <div class="user-content-box">
                    <div class="user-names">
                        <hi class="full-name">Fisayomi</hi>
                        <p class="user-name">@IFisayo</p>
                        <p class="time">. 1 Hour Ago</p>
                    </div>

                    <div class="user-content">
                        <p>We've gotta send kids back to school so one day they can be doctors and scientists, and everyone
                            can ignore them.</p>
                    </div>

                    <div class="bottom-row">
                        <!-- Comment Button -->
                        <div class="comment">
                            <div class="inner-comment">
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <span>165</span>
                        </div>

                        <!-- Like Button -->
                        <div>
                            <div class="like">
                                <ion-icon name="heart-outline" title="Like"> </ion-icon>
                            </div>
                            <span>382</span>
                        </div>
                    </div>

                </div>
            </div>

            <div class="bottom-menu">
                <div class="route">
                    <a href="/" class="">
                        <ion-icon class="list-icon" name="home-outline"></ion-icon>
                    </a>
                </div>
                <div class="route">
                    <a href="/" class="">
                        <ion-icon class="list-icon" name="person-outline"></ion-icon>
                    </a>
                </div>
                <div class="route">
                    <a href="/" class="">
                        <ion-icon class="list-icon" name="bookmark-outline"></ion-icon>
                    </a>
                </div>
                <div class="route">
                    <a href="/" class="">
                        <ion-icon class="list-icon" name="cog-outline"></ion-icon>
                    </a>
                </div>
                <div class="route">
                    <a href="/" class="">
                        <ion-icon class="list-icon" name="grid-outline"></ion-icon>
                    </a>
                </div>
            </div>

        </main>

        <aside class="sidebar__sidebar">
            <div class="right-flex-container ">
                <div className="sidebar_section">
                    <ul className="ps-0">
                        <li>
                            <a href="/" className="active">
                                <i className='bx bxs-compass'></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="bx bx-movie-play"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="bx bx-right-top-arrow-circle"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tweet"><a href="#">Flow</a></div>

                </div>
            </div>
        </aside>
    </div>
</template>