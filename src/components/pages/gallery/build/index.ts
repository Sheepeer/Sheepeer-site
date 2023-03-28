import * as THREE from 'three'

// 场景
const scene = new THREE.Scene()

const buildGallery = () => {

  /**
   * step 1: 设置 场景、相机、渲染器
   */

  // 相机 - 透视相机
  const camera = new THREE.PerspectiveCamera(
    45,  // fov 相机的视角范围，单位：°
    window.innerWidth / window.innerHeight,  // 渲染窗口的宽高比
    0.1,  // 近截面
    1000  // 远截面
  )
  camera.position.set(0, 2, 4)
  camera.lookAt(0, 0, 0)
  scene.add(camera)

  // 渲染器
  const renderer = new THREE.WebGLRenderer({
    antialias: true  // 抗锯齿
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  renderer.render(scene, camera)

  /**
   * step 2: 添加模型
   */
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const meterial = new THREE.MeshBasicMaterial({ color: '#d1d69f' })
  const cube = new THREE.Mesh(geometry, meterial)
  cube.position.set(1, 0, 0)
  scene.add(cube)

  /**
   * step 3: 添加轨道渲染器
   */

  /**
   * step 4: 设置自适应
   */
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })

  /**
   * step 5: 设置动效
   */
  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  // animate()
}


export { buildGallery }
