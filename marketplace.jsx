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

var ProductCarousel = React.createClass({
    render() {
        var data = this.props.data;

        return (
            <Carousel>
                <CarouselItem>
                    <img width={250} height={150} alt="900x500" src={data[0].thumbnailUrl} align="middle" />
                    <div className="carousel-caption">
                        <h3>{data[0].title}</h3>
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <img width={250} height={150} alt="900x500" src={data[1].thumbnailUrl} align="middle" />
                    <div className="carousel-caption">
                        <h3>{data[1].title}</h3>
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <img width={250} height={150} alt="900x500" src={data[2].thumbnailUrl} align="middle" />
                    <div className="carousel-caption">
                        <h3>{data[2].title}</h3>
                    </div>
                </CarouselItem>
            </Carousel>
        );
      }
});

var ThumbnailProducts = React.createClass ({
    render: function () {
        var data = this.props.data;
        return (
            <Grid>
                <Row>
                    <Col xs={3} md={3}>
                        <Thumbnail src={data[3].thumbnailUrl}>
                            <h3>{data[3].title}</h3>
                            <p>
                            <img src="./assets/images/btn-cart.png"></img>
                            <img src="./assets/images/btn-wishlist.png"></img>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={3} md={3}>
                        <Thumbnail src={data[4].thumbnailUrl}>
                            <h3>{data[4].title}</h3>
                            <p>
                            <img src="./assets/images/btn-cart.png"></img>
                            <img src="./assets/images/btn-wishlist.png"></img>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={3} md={3}>
                        <Thumbnail src={data[5].thumbnailUrl}>
                            <h3>{data[5].title}</h3>
                            <p>
                            <img src="./assets/images/btn-cart.png"></img>
                            <img src="./assets/images/btn-wishlist.png"></img>
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
            <div>
                <Header/>
                <ProductCarousel data={this.state.serverData} />
                <ThumbnailProducts data={this.state.serverData} />
            </div>
        );
    }
});

React.render(
        <MarketPlace source="./apps.json"/>, 
        document.getElementById("marketplace"));
