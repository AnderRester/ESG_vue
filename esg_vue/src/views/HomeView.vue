<script setup lang="ts">
import Header from '@/components/HeaderItem.vue';
import Footer from '@/components/FooterItem.vue';
import Inspection from '@/components/InspectionItem.vue';
import Modal from '@/components/ModalWindowItem.vue';
</script>

<template>

    <body>
        <div id="app">
            <Header />
            <section>
                <div class="founders_cont">
                    <h1>Founders</h1>
                    <div class="card-group">
                        <div class="card">
                            <img class=" card-img-top " src="../assets/images/founders/jUPq7QRYn1M.jpg"
                                alt="Card image cap ">
                            <div class="card-body ">
                                <h5 class="card-title ">Advertiser</h5>
                                <p class="card-text ">This text</p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top " src="../assets/images/founders/111.jpg " alt="Card image cap ">
                            <div class="card-body ">
                                <h5 class="card-title ">Developer</h5>
                                <p class="card-text ">This text</p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top "
                                src="../assets/images/founders/275854557_348028680716593_7296775242774394012_n.jpg"
                                alt="Card image cap ">
                            <div class="card-body ">
                                <h5 class="card-title ">DB Manager</h5>
                                <p class="card-text ">This text</p>
                            </div>
                        </div>
                    </div>
                    <h4>Those who laid the groundwork<br><span>They are our brain and our proud</span></h4>
                </div>
            </section>
            <section>
                <div class="workshop_cont">
                    <h1>Our Workshop</h1>
                    <div class="workshop_inner_cont">
                        <div id="carouselExampleIndicators" class="carousel carousel-dark slide"
                            data-bs-ride="carousel">
                            <!-- <div class="carousel-indicators" style="margin-top: 30%;">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div> -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="col">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-5">
                                                    <img src="../assets/images/artifacts/vase.png"
                                                        class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Ancient Vase</h5>
                                                        <p class="card-text">This is an ancient vase, found near Balti
                                                            city.
                                                        </p>
                                                        <p class="card-text">It has been found 20 years ago, near to the
                                                            Reutel
                                                            area.</p>
                                                        <p class="card-text"><small class="text-muted">Last updated 3
                                                                mins
                                                                ago</small></p>
                                                        <p class="text-center"><button class="btn btn-primary"
                                                                id="buttonAboutTest" type="button">About
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-5">
                                                    <img src="../assets/images/artifacts/plate.png"
                                                        class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Ancient Plate</h5>
                                                        <p class="card-text">This is an ancient plate, found near Balti
                                                            city.
                                                        </p>
                                                        <p class="card-text">It has been found 40 years ago, near to the
                                                            Sangerei area.</p>
                                                        <p class="card-text"><small class="text-muted">Last updated 3
                                                                mins
                                                                ago</small></p>
                                                        <p class="text-center"><button class="btn btn-primary"
                                                                id="buttonAboutTest" type="button">About</button></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-5">
                                                    <img src="../assets/images/artifacts/scythe.png"
                                                        class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Ancient Scythe</h5>
                                                        <p class="card-text">This is an ancient scythe, found near Balti
                                                            city.
                                                        </p>
                                                        <p class="card-text">It has been found 60 years ago, near to the
                                                            Reutel
                                                            area.</p>
                                                        <p class="card-text"><small class="text-muted">Last updated 3
                                                                mins
                                                                ago</small></p>
                                                        <p class="text-center"><button class="btn btn-primary"
                                                                id="buttonAboutTest" type="button">About</button></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <h4>Check our latest works
                        <br><span>Let us know, if you are interested</span>
                    </h4>
                </div>
            </section>
            <section>
                <div class="project_description">
                    <h1>Projects</h1>
                    <div class="project_inner row col-md-12 justify-content-around">
                        <article class="col project_description_article">At the moment our main project is Virtual
                            Museum of
                            World History. Check this out: large virtual halls, tens artiffacts, interesting and
                            revolutionazing
                            mechanics, in addition it is compatible with VR helmet of any types.
                            <span class="project_description_article_optimization">A lot of artifacts from a lot of
                                countries.
                                Everyweek updates reflected in our blog and social media. You have full acces to the
                                progress
                                and already developed things. Imagine fragments of territories, realistic landscapes,
                                buildings, pictures of the past and present. Possible we will add modren artifacts,
                                mechanisms
                                and piece of arts. It will be interesting expirience as for us also for you.</span>
                        </article>
                        <div class="col-md-3 d-flex"></div>
                        <div class="project_description_preview col"></div>
                    </div>
                    <h4 class="project_description_h4">Our development <span class="project_description_span"><br>Be
                            near
                            us,
                            near the future</span></h4>
                </div>
            </section>
            <Footer />
        </div>
    </body>
</template>