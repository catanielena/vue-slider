const app = new Vue ({
    el: '#root',
    data: {
        images: ['assets/img/newyork_ortho.png', 'assets/img/newmexico_ortho.png', 'assets/img/newyork_ortho.png', 'assets/img/ncarolina_ortho.png'],
        imageIndex: 0,
        autoSlider: null
    },
    methods: {
        nextImg: function() {
            return this.imageIndex >= this.images.length - 1 ? this.imageIndex=0 : this.imageIndex++;
        },
        prevImg: function() {
            return this.imageIndex <= 0 ? this.imageIndex=this.images.length - 1 : this.imageIndex--;
        },
        displayImage: function(i) {
            this.imageIndex = i;
            clearInterval(this.autoSlider);
        },
        nextImgClick: function() {
            clearInterval(this.autoSlider);
            this.nextImg();
        },
        prevImgClick: function() {
            clearInterval(this.autoSlider);
            this.prevImg();
        },
        autoS () {
            this.autoSlider = setInterval(this.nextImg, 1500);
        }
	},
    created () {
        this.autoS()
    }
});