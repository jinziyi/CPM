/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TabBarIOS,
    ScrollView,
    Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import {color} from '../../../style/vars';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'message'
        }
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {tab} = state;
        const width = Dimensions.get('window').width;
        const height = Dimensions.get('window').height - 70;
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="消息"
                    systemIcon="bookmarks"
                    onPress={this.select.bind(this, 'message')}
                    selected={tab == 'message'}
                >
                    <ScrollView>
                        <View style={styles.message}>
                            <Text style={styles.message_title}>大秦帝国3</Text>
                            <Text>
                                以秦军东进，雒阳周天子君臣惊慌迎接为序幕。连续展开两场冲突：一为秦军东进开道的宜阳之战，千夫长白起崭露头角；二为秦武王进军雒阳，举鼎暴死。白起奉秦武王遗诏，率一千铁骑从阴山北上秘密进入燕国，克难克险，设计迎回在燕国做人质的少年王子稷；甘茂与魏冉、白起等将士结盟，合力粉碎公子离的夺位政变，拥立公子稷（秦昭王）继位；燕国主政大臣乐毅说服燕昭王结好秦国，送回公子稷生母芈八子（宣太后）；芈八子拨乱反正廓清朝局，破格起用族弟魏冉为丞相，亲自摄政稳定秦国。
                            </Text>
                        </View>
                    </ScrollView>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="联系人"
                    systemIcon="more"
                    onPress={this.select.bind(this, 'phonelist')}
                    selected={tab == 'phonelist'}
                >
                    <ScrollView>
                        <Text style={styles.list}>
                            <Text>李小大</Text>
                            <Text>136912222306</Text>
                        </Text>
                        <Text style={styles.list}>
                            <Text>李小二</Text>
                            <Text>136912222306</Text>
                        </Text>
                        <Text style={styles.list}>
                            <Text>李小三</Text>
                            <Text>136912222306</Text>
                        </Text>
                        <Text style={styles.list}>
                            <Text>李小四</Text>
                            <Text>136912222306</Text>
                        </Text>
                    </ScrollView>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="动态"
                    systemIcon="history"
                    onPress={this.select.bind(this, 'star')}
                    selected={tab == 'star'}
                >
                    <ScrollView>
                        <Image
                            source={{uri: 'http://vczero.github.io/ctrip/star_page.jpg'}}
                            style={{width, height}}
                        />
                    </ScrollView>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }

    select(tab) {
        this.setState((state) => ({
            tab
        }))
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        paddingTop: 70,
        alignItems: 'center'
    },

});