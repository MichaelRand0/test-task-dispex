import s from './Preloader.scss'

export const Preloader = () => {
  return (
    <div className='preloader'>
      <svg height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-1.3043478260869565s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(36 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-1.1594202898550725s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(72 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-1.0144927536231882s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(108 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.8695652173913043s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(144 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.7246376811594203s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(180 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.5797101449275363s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(216 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.43478260869565216s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(252 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.2898550724637681s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(288 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="-0.14492753623188406s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(324 50 50)">
          <rect x="45.5" y="25.5" rx="4.5" ry="4.5" width="9" height="9" fill="#fe718d">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.4492753623188404s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g></svg>
    </div>
  )
}