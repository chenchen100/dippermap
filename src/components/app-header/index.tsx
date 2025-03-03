import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WechatOutlined,
  GithubOutlined
} from '@ant-design/icons'
import './index.css'
import { Tooltip } from 'antd'
import weChat from '../../assets/weixin.jpeg'

type AppHeaderProps = {
  collapsed: boolean
  setCollapsed: (val: boolean) => void
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  setCollapsed,
  collapsed
}) => {
  return (
    <div className="app-header">
      <div
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <div className="header_icon">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
      <div className="header-right">
        <div className="weChat">
          <Tooltip
            color={'#fff'}
            placement="bottom"
            title={
              <div>
                <div className="weChatText">
                  <span>微信扫一扫关注</span>
                </div>
                <img
                  style={{ paddingTop: 6 }}
                  width={130}
                  src={weChat}
                  alt=""
                />
              </div>
            }
          >
            <WechatOutlined className="header_icon" />
          </Tooltip>
        </div>
        <div className="gitHub">
          <GithubOutlined
            className="header_icon"
            onClick={() => {
              window.open('https://github.com/DipperMap/dippermap')
            }}
          />
        </div>
      </div>
    </div>
  )
}
