'use strict';

var Button= ReactBootstrap.Button,
    ButtonToolbar= ReactBootstrap.ButtonToolbar,
    Nav= ReactBootstrap.Nav,
    Navbar= ReactBootstrap.Navbar,
    NavDropdown= ReactBootstrap.NavDropdown,
    MenuItem= ReactBootstrap.MenuItem,
    Carousel= ReactBootstrap.Carousel,
    CarouselItem= ReactBootstrap.CarouselItem,
    Thumbnail= ReactBootstrap.Thumbnail,
    Grid= ReactBootstrap.Grid,
    Row= ReactBootstrap.Row,
    Col= ReactBootstrap.Col,
    NavItem= ReactBootstrap.NavItem;

var Navigation = React.createClass({

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

const ProductCarousel = React.createClass({
    getInitialState: function() {
        return {
            index: 0,
            direction: null
        };
    },

    handleSelect: function(selectedIndex, selectedDirection) {
        this.setState({
            index: selectedIndex,
            direction: selectedDirection
        });
    },

    render() {
        return (
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <CarouselItem>
                    <img width={300} height={100} alt="Product 1" src="./assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>First slide label</h3>
                        <p>Descripton of First.</p>
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <img width={300} height={100} alt="Product 2" src="./assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>Descripton of Second.</p>
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <img width={300} height={100} alt="Product 3" src="./assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>Third slide label</h3>
                        <p>Descripton of Third.</p>
                    </div>
                </CarouselItem>
            </Carousel>
        );
      }
});

var ThumbnailProducts = React.createClass ({
    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src={this.props.img} alt="Product 4">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./assets/CiscoLogo.jpg" alt="Product 5">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./assets/CiscoLogo.png" alt="Product 6">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
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

var MarketPlace = React.createClass({
    getInitialState: function() {
        return {
            image: ''
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(result) {

            var lastApp = result.apps[0];

            if (this.isMounted()) {
                this.setState({
                    image: lastApp.thumbnailUrl
                });

                alert(this.state.image);
            }
        }.bind(this));
    },

    render: function() {
        return(
            <div>
                <Navigation/>
                <ProductCarousel/>
                <ThumbnailProducts img={this.state.image}/>
                <Footer/>
            </div>
        );
    }
});

React.render(
        <MarketPlace source="./apps.json"/>, 
        document.getElementById("marketplace"));
