'use strict';

var Button= ReactBootstrap.Button,
    ButtonToolbar= ReactBootstrap.ButtonToolbar,
    Nav= ReactBootstrap.Nav,
    MenuItem= ReactBootstrap.MenuItem,
    Carousel= ReactBootstrap.Carousel,
    CarouselItem= ReactBootstrap.CarouselItem,
    Thumbnail= ReactBootstrap.Thumbnail,
    Grid= ReactBootstrap.Grid,
    Row= ReactBootstrap.Row,
    Col= ReactBootstrap.Col,
    Navbar= ReactBootstrap.Navbar,
    NavDropdown= ReactBootstrap.NavDropdown,
    NavItem= ReactBootstrap.NavItem;

var Header = React.createClass({

    render: function () {
        return (
            <Navbar brand="Marketplace" toggleNavKey={0}>
                <Nav right eventKey={0}> {}
                    <NavItem eventKey={1} href="#">Wishlist</NavItem>
                    <NavItem eventKey={2} href="#">Cart</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="collapsible-navbar-dropdown">
                        <MenuItem eventKey="1">Login</MenuItem>
                        <MenuItem eventKey="2">Request Apps</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Feedback</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <footer class="footer">
                <div class="navbar-fixed-bottom">
                    <p class="text-muted">Copyright reserved - Marketplace</p>
                </div>
            </footer>
        );
    }
});


var ProductCarousel = React.createClass({
    createCarouselItems: function(data)
    {
        var items = [];
        for (var i = 0; i < this.props.carouselNum; i++)
        {
            items.push(
                <CarouselItem>
                    <img width={250} height={200} alt={data[i].title} src={data[i].thumbnailUrl} />
                    <div className="carousel-caption">
                        <h4>{data[i].title}</h4>
                    </div>
                </CarouselItem>
            );
        }

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

var SingleProductThumbnail = React.createClass ({
    getInitialState: function() {
        return {
            inWishlist: true,
            inCart: false
        }
    },

    handleCartAdd: function() {
        if (this.state.inCart)
        {
            alert("Item already in cart");
        }
        else
        {
            alert("Adding item to cart");
            this.setState({inCart: true});
        }
    },

    handleWishlistAdd: function() {
        alert("handleWishlistAdd");
        this.setState({inWishlist: false});
    },

    render: function() {
        var cartButton = [];
        if (!this.state.inCart) 
            cartButton.push(<img src="./assets/images/btn-cart.png" onClick={this.handleCartAdd}></img>);
        else
            cartButton.push(<img src="./assets/images/btn-cart.png"></img>);

        return (
            <Thumbnail src={this.props.thumbnailUrl}>
                <center> <p>
                    <h4>{this.props.title}</h4>
                    {cartButton}
                    <img src="./assets/images/btn-wishlist.png" onClick={this.handleWishlistAdd}></img> &nbsp;
                    <Button bsStyle="primary">{this.props.price}</Button> &nbsp;
                </p> </center>
            </Thumbnail>
        );
    }
});

var ProductsThumbnails = React.createClass ({

    createThumbnails: function(rawData) {
        var formattedData = rawData.map(function (thumb) {
            var price = (thumb.price > 0) ? thumb.price : "Free";
            return (
                <Col xs={6} md={4}>
                    <SingleProductThumbnail thumbnailUrl={thumb.thumbnailUrl} price={price} title={thumb.title} />
                </Col>
            );

        });

        return(formattedData);
    },

    render: function () {
        return (
            <Grid>
                <Row>
                    {this.createThumbnails(this.props.data)}
                </Row>
            </Grid>
        );
    }
});

var MarketPlace = React.createClass({
    getInitialState: function() {
        return {
            stillLoading: true,
            serverData: []
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(results) {
            var data = results.apps;
            this.state.serverData = data;

            if (this.isMounted()) {
                this.setState({stillLoading: false });
            }
        }.bind(this));
    },

    render: function() {
        if (this.state.stillLoading) return null;

        return(
            <div class="panel-body">
                <Header/>
                <ProductCarousel data={this.state.serverData} carouselNum={2}/>
                &nbsp; &nbsp;
                <ProductsThumbnails data={this.state.serverData} />
            </div>
        );
    }
});

React.render(
        <MarketPlace source="./apps.json"/>, 
        document.getElementById("marketplace"));
