<template>
    <div class="modal">
        <div class="modal-content">
            <button class="close" v-on:click="isModalOpen = false">
                <i class="bx bx-x">X</i>
            </button>
            <div class="modal-inner">
                <h3>Underconstruction</h3>
            </div>

            <div class="post-tweet">
                <div class="form-group-1">
                    <img src="../../assets/Fw5oehhX0AM5i5F.jpg" alt="profile-pics" title="You">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isModalOpen'],
};
</script>

<style scoped>
.modal {
    background: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    position: relative;
    top: -80px;
    background: #15202B;
    padding: 30px 30px;
    border-radius: 5px;
    max-width: 450px;
    width: 90%;
}

.modal-inner h3 {
    font-size: 15px;
    margin-bottom: 10px;
    color: var(--dark1);
}

.close {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 8px;
    background: var(--pink);
}
</style>