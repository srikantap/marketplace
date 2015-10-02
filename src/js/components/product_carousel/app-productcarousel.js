var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Carousel = ReactBootstrap.Carousel;
var CarouselItem = ReactBootstrap.CarouselItem;

var ProductCarousel = React.createClass({
    createCarouselItems: function(data)
    {
        //console.log(this.props.carouselNum, data);
        var items = [];
        for (var i = 0; i < this.props.carouselNum; i++)
        {
            //console.log("Pushing ", data[i].title);
            items.push(
                <CarouselItem>
                    <img width={250} height={200} alt={data[i].title} src={data[i].thumbnailUrl} />
                    <div className="carousel-caption">
                        <h4>{data[i].title}</h4>
                    </div>
                </CarouselItem>
            );
        }

        //console.log(items);
        return (items);
    },

    render: function() {
        return (
            <Carousel> 
                {this.createCarouselItems(this.props.data)}
            </Carousel>
        );
      }
});

module.exports = ProductCarousel;
