import React, { Component } from "react";
import {
    Container,
    Header,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon,
    Button,
    Item,
    Label,
    Input
} from "native-base";
const cards = [
    {
        text: "Card One",
        name: "One"
        // image: require("./img/swiper-1.png")
    },
    {
        text: "Card One",
        name: "two"
        // image: require("./img/swiper-1.png")
    }
];
export default class SearchResults extends Component {
    render() {
        return (
            <Container>
                <Header />
                <View>
                    <DeckSwiper
                        ref={c => (this._deckSwiper = c)}
                        dataSource={cards}
                        renderEmpty={() => (
                            <View style={{ alignSelf: "center" }}>
                                <Text>Over</Text>
                            </View>
                        )}
                        renderItem={item => (
                            <Card style={{ elevation: 1 }}>
                                <Card>
                                    <CardItem bordered>
                                        <Item inlineLabel>
                                            <Label>Name</Label>
                                            <Input
                                                value={
                                                    this.props.navigation.state.params.retmeasurements
                                                        .name
                                                }
                                            />
                                        </Item>

                                        <Item inlineLabel>
                                            <Label>Contact No</Label>
                                            <Input
                                                value={
                                                    this.props.navigation.state.params.retmeasurements
                                                        .mobile
                                                }
                                            />
                                        </Item>
                                    </CardItem>
                                </Card>
                                {this.props.navigation.state.params.sork &&
                                    this.props.navigation.state.params.enabled &&
                                    this.state.params.retmeasurements.measurements.shirt ? (
                                        <CardItem bordered>
                                            <Body>
                                                <Item inlineLabel>
                                                    <Label>Length</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.length
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Shoulder</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.shoulder
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Sleeves</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.sleeves
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Chest</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.chest
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Stomach</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.stomach
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Seat</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.seat
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>FrontFix</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.frontfix
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Collum</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.collom
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Cuff</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.shirt.cuff
                                                        }
                                                    />
                                                </Item>
                                            </Body>
                                        </CardItem>
                                    ) : (
                                        <View />
                                    )}

                                {this.props.navigation.state.params.sork &&
                                    this.props.navigation.state.params.enabled &&
                                    this.props.navigation.state.params.retmeasurements.measurements
                                        .kurta ? (
                                        <CardItem bordered>
                                            <Body>
                                                <Item inlineLabel>
                                                    <Label>Length</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .length
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Shoulder</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .shoulder
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Sleeves</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .sleeves
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Chest</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .chest
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Stomach</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .stomach
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Seat</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .seat
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>FrontFix</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .frontfix
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Collum</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .collom
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Cuff</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.kurta
                                                                .cuff
                                                        }
                                                    />
                                                </Item>
                                            </Body>
                                        </CardItem>
                                    ) : (
                                        <View />
                                    )}

                                {this.props.navigation.state.params.sork == false &&
                                    this.props.navigation.state.params.enabled &&
                                    this.props.navigation.state.params.retmeasurements.measurements
                                        .jean ? (
                                        <CardItem bordered>
                                            <Body>
                                                <Item inlineLabel>
                                                    <Label>Length</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.length
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Waist</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.waist
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Seat</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.seat
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Fork</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.fork
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Thigh</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.thigh
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Knee</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.knee
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Bottom</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.bottom
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Back Rise</Label>
                                                    <Input
                                                        value={
                                                            this.props.navigation.state.params.retmeasurements
                                                                .measurements.jean.backrise
                                                        }
                                                    />
                                                </Item>
                                            </Body>
                                        </CardItem>
                                    ) : (
                                        <View />
                                    )}

                                {this.props.navigation.state.params.sork == false &&
                                    this.props.navigation.state.params.enabled &&
                                    this.props.navigation.state.params.retmeasurements.measurements
                                        .pant ? (
                                        <CardItem bordered>
                                            <Body>
                                                <Item inlineLabel>
                                                    <Label>Length</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .length
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Waist</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .waist
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Seat</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .seat
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Fork</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .fork
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Thigh</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .thigh
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Knee</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .knee
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Bottom</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .bottom
                                                        }
                                                    />
                                                </Item>
                                                <Item inlineLabel>
                                                    <Label>Back Rise</Label>
                                                    <Input
                                                        value={
                                                            this.state.params.retmeasurements.measurements.pant
                                                                .backrise
                                                        }
                                                    />
                                                </Item>
                                            </Body>
                                        </CardItem>
                                    ) : (
                                        <View />
                                    )}
                            </Card>
                        )}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        flex: 1,
                        position: "absolute",
                        bottom: 50,
                        left: 0,
                        right: 0,
                        justifyContent: "space-between",
                        padding: 15
                    }}
                >
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Icon name="arrow-forward" />
                        <Text>Swipe Right</Text>
                    </Button>
                    <Button
                        iconRight
                        onPress={() =>
                            console.log(
                                this.props.navigation.state.params.retmeasurements.name
                            )
                        }
                    >
                        <Icon name="arrow-forward" />
                        <Text>Console</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}
