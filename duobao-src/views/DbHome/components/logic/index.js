/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default (SourceComponent) => (Duobao, fetch) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'home',
            cat: 'hot',
            homeData: {},
            catData: [],
            countType: 'asc'
        }
    }

    render() {
        const props = this.props;
        const state = this.state;
        const newProps = (props, state) => {
            return {
                ...props,
                ...state,
                getData: this.getData.bind(this),
                handlers: this.handlers.bind(this)
            }
        };
        return (
            <SourceComponent {...newProps(props, state)}/>
        )
    }

    handlers(type) {
        return {
            'setState': (key, value, cb = () => {
            }) => this.setState({[key]: value}, cb),
            'openWebView': ({url}) => {
                this.props.setWebView(url);
                this.props.route.goto('WebView');
            },
            'updateCat': key => {
                this.handlers('setState')('cat', key);
                this.getData('catData')(key);
            }
        }[type]
    }

    getData(type) {
        return {
            'footer': props => [
                {
                    text: '首页',
                    key: 'home',
                    onPress: () => {
                        this.setState({
                            tab: 'home'
                        })
                    },
                    icon: require('../images/footer-home.png'),
                    activeIcon: require('../images/footer-home-active.png')
                },
                {
                    text: '福利',
                    key: 'fuli',
                    onPress: () => {
                        this.setState({
                            tab: 'fuli'
                        });
                        this.handlers('openWebView')({url: '/caption'})
                    },
                    icon: require('../images/footer-welfare.png'),
                    activeIcon: require('../images/footer-welfare-active.png')
                },
                {
                    text: '个人中心',
                    key: 'profile',
                    onPress: () => {
                        this.setState({
                            tab: 'profile'
                        });
                        this.handlers('openWebView')({url: '/profilemy'})
                    },
                    icon: require('../images/footer-home.png'),
                    activeIcon: require('../images/footer-home-active.png')
                },
            ],
            'menus': props => [
                {
                    text: '分类',
                    key: 'category',
                    bgColor: '#35b87f',
                    onPress: () => {
                        this.handlers('openWebView')({url: '/goodscategory', title: '分类'})
                    },
                    icon: require('../images/nav0.png'),
                },
                {
                    text: '最新揭晓',
                    key: 'new',
                    bgColor: '#ffa200',
                    onPress: () => {
                        this.handlers('openWebView')({url: '/goodswilist', title: '最新揭晓'})
                    },
                    icon: require('../images/nav2.png'),
                },
                {
                    text: '晒单',
                    key: 'share',
                    bgColor: '#5b99ee',
                    onPress: () => {
                        this.handlers('openWebView')({url: '/goodsshare', title: '晒单'})
                    },
                    icon: require('../images/nav3.png'),
                },
                {
                    text: '充值',
                    key: 'charge',
                    bgColor: '#f26d5f',
                    onPress: () => {
                        this.handlers('openWebView')({url: '/ordercharge', title: '充值'})
                    },
                    icon: require('../images/nav1.png')
                }
            ],
            'cats': countType => [
                {
                    text: '热门',
                    key: 'hot',
                    onPress: this.handlers('updateCat')
                },
                {
                    text: '进度',
                    key: 'progress',
                    onPress: this.handlers('updateCat')
                },
                {
                    text: '新品',
                    key: 'new',
                    onPress: this.handlers('updateCat')
                },
                {
                    text: countType == 'asc' ? '总需次数⬆' : '总需次数⬇',
                    key: 'price',
                    onPress: (key) => {
                        this.setState(({countType, cat}) => ({
                            countType: cat != key ? countType : countType == 'asc' ? 'desc' : 'asc',
                            cat: key
                        }), () => {
                            this.getData('catData')(key, this.state.countType);
                        });
                    }
                },
            ],
            'catData': (cat, sort = null) => {
                fetch('http://1.weibo.com/aj/page/home?_' + (+new Date), {
                    method: 'POST',
                    cache: false,
                    headers: {
                        'User-Agent': 'iPhone/Android',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({
                        tab: cat,
                        sort: sort,
                        page: 1,
                        type: cat
                    })
                }).then(res => res.json()).then(data => {
                    this.setState({
                        catData: data.data.products
                    })
                })
            },
            'homeData': () => {
                fetch('http://1.weibo.com/aj/page/home?_' + (+new Date)).then(res => res.json()).then(data => {
                    this.setState({
                        homeData: data.data,
                        catData: data.data.products
                    })
                }).catch(console.log)
            }
        }[type]
    }
}