import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";


const ActivitiesDefult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activitiesDefult}>
      <View style={styles.statusBar}>
      <Image
  style={[styles.connectionsIcon, styles.stickyTapePosition]}
  contentFit="cover"
  source={{ uri: activity.link }} 
    />
        
        <View style={styles.time}>
          <Text style={styles.time1}>9:27</Text>
        </View>
      </View>
      <View style={styles.activitiesDefultChild} />
      <View style={styles.barButton1}>
        <LinearGradient
          style={[styles.barButton1Child, styles.barChildPosition]}
          locations={[0, 0.52, 0.79, 0.98, 0.98]}
          colors={["#f89b92", "#f89b92", "#f57b6f", "#f4695c", "#f68378"]}
        />
        <Text style={[styles.activities, styles.rewards1Layout]}>
          Activities
        </Text>
        <Text style={[styles.activities1, styles.showFlexBox]}>Activities</Text>
      </View>
      <Pressable
        style={[styles.barButton2, styles.rewards1Layout]}
        onPress={() => navigation.navigate("ActivitiesRewards")}
      >
        <LinearGradient
          style={[styles.barButton2Child, styles.barChildPosition]}
          locations={[0, 0.52, 0.79, 0.98, 0.98]}
          colors={["#f89b92", "#f89b92", "#f57b6f", "#f4695c", "#f68378"]}
        />
        <Text style={[styles.rewards, styles.showFlexBox]}>Rewards</Text>
        <Text style={[styles.rewards1, styles.rewards1Layout]}>Rewards</Text>
      </Pressable>
      <View style={styles.toFeed}>
        <View style={styles.cardsRow}>
          <View style={[styles.smallCard, styles.smallCardLayout]}>
            <View style={styles.textContent}>
              <View style={styles.textContent1}>
                <Text style={styles.text}>$6</Text>
              </View>
            </View>
            <View style={[styles.textContent2, styles.textContent2FlexBox]}>
              <Text style={[styles.vegetables, styles.vegetablesTypo]}>
                Vegetables
              </Text>
            </View>
            <View style={[styles.imageContainer, styles.textContent2FlexBox]}>
              <View style={[styles.imageContainer1, styles.rewards1FlexBox]}>
                
              </View>
            </View>
          </View>
          <View style={[styles.smallCard1, styles.smallCardLayout]}>
            <View style={styles.textContent}>
              <View style={styles.textContent1}>
                <Text style={styles.text}>$6</Text>
              </View>
            </View>
            <View style={[styles.textContent2, styles.textContent2FlexBox]}>
              
            </View>
            <View style={[styles.imageContainer, styles.textContent2FlexBox]}>
              <View style={[styles.imageContainer1, styles.rewards1FlexBox]}>
                
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.whatToFeed, styles.whatToFeedTypo]}>
          What to feed
        </Text>
        <Text style={[styles.showAll, styles.showFlexBox]}>Show All</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.userImg, styles.headerLayout]}>
          
          <Image
            style={styles.boyIcon}
            contentFit="cover"
            source={require("../assets/boy.png")}
          />
        </View>
        <Text style={styles.getReadyFor}>
          Get ready for a flavorful journey of discovery!
        </Text>
        <Text style={[styles.helloBasel, styles.whatToFeedTypo]}>
          Hello, Basel!
        </Text>
      </View>
      <View style={[styles.navigationBar, styles.navigationLayout]}>
        <View style={[styles.navigationBarChild, styles.navigationLayout]} />
        <View style={[styles.coloredIcons, styles.iconLayout]}>
          <Image
            style={[styles.familyIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/003family.png")}
          />
          
          <Image
            style={[styles.puzzle1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/002puzzle-1.png")}
          />
          
          
          
        </View>
        
      </View>
      <View style={styles.activityCards}>
        <View style={styles.activityCardLayout}>
          
          <View style={styles.activityTitle}>
            <View style={[styles.activityTitleChild, styles.activityLayout]} />
            <Text style={[styles.stickyTape, styles.vegetablesTypo]}>
              Sticky Tape
            </Text>
            <Pressable
              style={styles.playButton3}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=q3p6ASOZdVE")
              }
            >
              
            </Pressable>
          </View>
        </View>
        <View style={[styles.activityCard2, styles.activityCardLayout]}>
          <Image
            style={[styles.activityPicIcon, styles.activityCardLayout]}
                   contentFit="cover"
                source={{ uri: activity.link }} 
    />
          
          <View style={styles.activityTitle}>
            <View style={[styles.activityTitleItem, styles.activityLayout]} />
            <Text style={[styles.stickyTape, styles.vegetablesTypo]}>
              Ball Rescue
            </Text>
            <Image
              style={styles.playButton3}
              contentFit="cover"
              source={require("../assets/005-play-button-4.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.playtimeTreasures, styles.whatToFeedTypo]}>
        Playtime Treasures
      </Text>
      <Text style={[styles.showAll1, styles.showFlexBox]}>Show All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stickyTapePosition: {
    top: 15,
    position: "absolute",
  },
  barChildPosition: {
    backgroundColor: "transparent",
    marginLeft: -54,
    width: 108,
    height: 41,
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
  },
  rewards1Layout: {
    height: 29,
    width: 86,
    left: "50%",
    position: "absolute",
  },
  showFlexBox: {
    display: "flex",
    height: 29,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.oxygenRegular,
    fontSize: FontSize.h5Medical_size,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  smallCardLayout: {
    padding: Padding.p_base,
    height: 135,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent2FlexBox: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  vegetablesTypo: {
    fontFamily: FontFamily.oxygenBold,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
  },
  rewards1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  whatToFeedTypo: {
    color: Color.colorSalmon_100,
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_lgi,
    fontWeight: "700",
    height: 29,
    left: "50%",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  headerLayout: {
    height: 60,
    position: "absolute",
  },
  navigationLayout: {
    height: 74,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  iconPosition2: {
    left: 203,
    height: 35,
    width: 35,
    position: "absolute",
  },
  iconPosition1: {
    left: 138,
    position: "absolute",
  },
  iconPosition: {
    top: -1,
    height: 35,
    width: 35,
    display: "none",
    position: "absolute",
  },
  activityCardLayout: {
    height: 225,
    width: 225,
  },
  activityLayout: {
    borderRadius: Border.br_xl,
    height: 54,
    width: 178,
    left: 0,
    top: 0,
    position: "absolute",
  },
  connectionsIcon: {
    right: 14,
    width: 68,
    height: 16,
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.aOSPSysLightScrim,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  time: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 39,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.twitterWhite100,
  },
  activitiesDefultChild: {
    backgroundColor: Color.colorGray_500,
    width: 216,
    height: 41,
    borderRadius: Border.br_11xl,
    top: 140,
    marginLeft: -108,
    left: "50%",
    position: "absolute",
  },
  barButton1Child: {
    top: 0,
  },
  activities: {
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    color: Color.colorGray_100,
    fontFamily: FontFamily.oxygenRegular,
    marginLeft: -43,
    height: 29,
    fontSize: FontSize.h5Medical_size,
    textAlign: "center",
    top: 6,
  },
  activities1: {
    color: Color.twitterWhite100,
    width: 86,
    display: "flex",
    marginLeft: -43,
    top: 6,
  },
  barButton1: {
    width: 108,
    height: 41,
    left: "50%",
    top: 140,
    marginLeft: -108,
    position: "absolute",
  },
  barButton2Child: {
    top: -6,
    display: "none",
  },
  rewards: {
    width: 86,
    display: "flex",
    marginLeft: -43,
    color: Color.colorGray_100,
    top: 0,
  },
  rewards1: {
    color: Color.twitterWhite100,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    fontFamily: FontFamily.oxygenRegular,
    marginLeft: -43,
    height: 29,
    fontSize: FontSize.h5Medical_size,
    textAlign: "center",
    top: 0,
  },
  barButton2: {
    marginLeft: 11,
    top: 146,
  },
  text: {
    lineHeight: 16,
    fontFamily: FontFamily.paragraphSmall,
    textAlign: "left",
    color: Color.ink01,
    fontSize: FontSize.h5Medical_size,
  },
  textContent1: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.twitterWhite100,
  },
  textContent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    display: "none",
  },
  vegetables: {
    color: Color.ink01,
    fontFamily: FontFamily.oxygenBold,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  textContent2: {
    width: 88,
    flexDirection: "row",
  },
  vegetableIcon: {
    height: 64,
    width: 64,
  },
  imageContainer1: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  imageContainer: {
    alignSelf: "stretch",
  },
  smallCard: {
    backgroundColor: Color.colorSalmon_200,
    width: 198,
  },
  smallCard1: {
    backgroundColor: Color.colorCadetblue_200,
    width: 197,
    marginLeft: 16,
  },
  cardsRow: {
    marginLeft: -151.5,
    width: 343,
    paddingTop: Padding.p_base,
    flexDirection: "row",
    top: 18,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  whatToFeed: {
    marginLeft: -191.5,
    width: 129,
    top: 0,
  },
  showAll: {
    marginLeft: 93.5,
    width: 64,
    color: Color.colorGray_100,
    top: 0,
  },
  toFeed: {
    marginLeft: -177,
    width: 383,
    height: 169,
    top: 200,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  userImg: {
    width: 60,
    left: 0,
    top: 0,
  },
  boyIcon: {
    top: 10,
    left: 10,
    width: 40,
    height: 44,
    position: "absolute",
  },
  getReadyFor: {
    marginLeft: -95.5,
    top: 36,
    fontWeight: "300",
    fontFamily: FontFamily.oxygenLight,
    color: Color.colorGray_600,
    width: 252,
    height: 17,
    fontSize: FontSize.h5Medical_size,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  helloBasel: {
    marginLeft: -107.5,
    top: 11,
    width: 149,
  },
  header: {
    top: 54,
    left: 22,
    width: 313,
  },
  navigationBarChild: {
    top: 0,
    backgroundColor: Color.twitterWhite100,
    height: 74,
  },
  familyIcon: {
    top: -11,
    left: 73,
    display: "none",
    position: "absolute",
  },
  localBusinessIcon: {
    top: -12,
    display: "none",
  },
  puzzle1Icon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  consultationIcon: {
    top: -12,
    display: "none",
    height: 35,
    width: 35,
  },
  feedingIcon: {
    left: -73,
  },
  chat2Icon: {
    left: 73,
  },
  coloredIcons: {
    top: 19,
    left: 97,
    position: "absolute",
  },
  consultationCopyIcon: {
    width: 45,
    height: 45,
    display: "none",
    top: 0,
  },
  localBusiness1Icon: {
    left: 268,
    top: 0,
    position: "absolute",
  },
  family1Icon: {
    top: 0,
  },
  puzzle2Icon: {
    left: 73,
    display: "none",
    top: 0,
    position: "absolute",
  },
  chat3Icon: {
    height: 35,
    width: 35,
    top: 0,
  },
  outlinesIcons: {
    width: 303,
    left: 24,
    height: 35,
    top: 18,
    position: "absolute",
  },
  navigationBar: {
    top: 566,
  },
  activityPicIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  activityTitleChild: {
    backgroundColor: Color.colorSalmon_100,
  },
  stickyTape: {
    left: 20,
    color: Color.twitterWhite100,
    top: 15,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  playButton3: {
    left: 131,
    top: 12,
    width: 30,
    height: 30,
    position: "absolute",
  },
  activityTitle: {
    top: 86,
    height: 54,
    width: 178,
    left: 24,
    position: "absolute",
  },
  activityTitleItem: {
    backgroundColor: Color.colorCadetblue_100,
  },
  activityCard2: {
    marginLeft: 16,
  },
  activityCards: {
    top: 232,
    left: 12,
    width: 348,
    flexDirection: "row",
    position: "absolute",
  },
  playtimeTreasures: {
    marginLeft: -172,
    width: 177,
    top: 200,
  },
  showAll1: {
    marginLeft: 108,
    width: 64,
    top: 200,
    color: Color.colorGray_100,
  },
  activitiesDefult: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.twitterWhite100,
  },
});

export default ActivitiesDefult;
