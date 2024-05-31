import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#F7F0E8",
					borderRadius: 30,
					paddingTop: 54,
					paddingBottom: -60,
					paddingLeft: 20,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 27,
						marginRight: 19,
					}}>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 32,
								marginBottom: 3,
							}}>
							{"Hello , Devs"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
							}}>
							{"14 tasks today"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 50,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -2,
								left: 2,
								width: 46,
								height: 45,
							}}
						/>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 36,
						marginRight: 20,
					}}>
					<View 
						style = {{
							width: 280,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FBF9F7",
							borderColor: "#FBF9F7",
							borderRadius: 14,
							borderWidth: 1,
							paddingVertical: 16,
							paddingHorizontal: 15,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 16,
								height: 16,
								marginRight: 15,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								flex: 1,
							}}>
							{"Search"}
						</Text>
					</View>
					<View 
						style = {{
							width: 50,
							backgroundColor: "#F0522F",
							borderRadius: 14,
							paddingHorizontal: 11,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 25,
								marginTop: 12,
							}}
						/>
					</View>
				</View>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 10,
					}}>
					{"Categories"}
				</Text>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 32,
						marginRight: 20,
					}}>
					<View 
						style = {{
							width: 186,
							alignSelf: "flex-start",
							backgroundColor: "#FAF8F6",
							borderRadius: 15,
							paddingVertical: 19,
							paddingHorizontal: 17,
							marginRight: 24,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 4,
							}}>
							{"Exercise"}
						</Text>
						<View 
							style = {{
							}}>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 12,
								}}>
								{"12 Tasks"}
							</Text>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 132,
									marginTop: -2,
								}}
							/>
						</View>
					</View>
					<View 
						style = {{
							width: 186,
							alignSelf: "flex-start",
							backgroundColor: "#FAF8F6",
							borderRadius: 15,
							paddingTop: 19,
							paddingBottom: 4,
							paddingHorizontal: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 4,
							}}>
							{"Study"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
								marginBottom: 5,
							}}>
							{"12 Tasks"}
						</Text>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 151,
								height: 132,
							}}
						/>
					</View>
          <View 
						style = {{
							width: 186,
							alignSelf: "flex-start",
							backgroundColor: "#FAF8F6",
							borderRadius: 15,
							paddingTop: 19,
							paddingBottom: 4,
							paddingHorizontal: 17,
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginBottom: 4,
							}}>
							{"Study"}
						</Text>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 12,
								marginBottom: 5,
							}}>
							{"12 Tasks"}
						</Text>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 151,
								height: 132,
							}}
						/>
					</View>
				</ScrollView>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 20,
						marginBottom: 11,
					}}>
					{"Ongoing Task"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 18,
						marginBottom: 12,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Mobile App Development"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 17,
						marginBottom: 12,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Web Development"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 18,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Push Ups"}
					</Text>
				</View>
        <View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 18,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Outing With Lucille"}
					</Text>
				</View>
        <View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 18,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Activity"}
					</Text>
				</View>
        <View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 18,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Activity"}
					</Text>
				</View>
        <View 
					style = {{
						backgroundColor: "#FBF9F7",
						borderColor: "#E7D0BA",
						borderRadius: 15,
						borderWidth: 1,
						paddingTop: 50,
						paddingBottom: 62,
						paddingHorizontal: 18,
						marginRight: 19,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 16,
						}}>
						{"Learn Java"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
