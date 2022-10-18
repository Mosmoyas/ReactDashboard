import "./Files.css"
import { PageHead } from '../../Components'
import DataFiles from '../../Data/DataFiles'
const Files = () => {

  const FileData = DataFiles.map((val) => {
    return (<>
      <div class="file bg-white p-10 rad-10" id={val.id}>

        <i class="fa-solid fa-download c-grey p-absolute"></i>
        <div class="icon txt-c">
          <img src={val.imgFile} alt="" class="mt-15 mb-15" />
        </div>
        <div class="txt-c mb-10 fs-14">
          {val.filename}
        </div>
        <p class="c-grey fs-13">{val.uploader}</p>
        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
          <span>{val.uploadDate}</span>
          <span>{val.capacity}</span>
        </div>
      </div></>)
  })
  return (
    <>
      <PageHead>Files</PageHead>
      <div class="files-page  d-flex m-20 gap-20">
        <div class="files-stats bg-white p-20 rad-10 ">
          <h2 class=" mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon">

            </i>
            <div class="info"><span>PDF Files</span>
              <span class="c-grey d-block mt-5">130</span>
            </div>
            <div class="size c-grey">6.5GB</div>
          </div>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-images fa-lg green center-flex c-green icon">

            </i>
            <div class="info">
              <span>Images</span>
              <span class="c-grey d-block mt-5">115 Files</span>
            </div>
            <div class="size c-grey">3.5GB</div>
          </div>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-word fa-lg red center-flex c-red icon">

            </i>
            <div class="info">
              <span>Word Files</span>
              <span class="c-grey d-block mt-5">175 Files</span>
            </div>
            <div class="size c-grey">8.2GB</div>
          </div>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-solid fa-file-csv fa-lg orange center-flex c-orange icon">

            </i>
            <div class="info">
              <span>CSV Files</span>
              <span class="c-grey d-block mt-5">230 Files</span>
            </div>
            <div class="size c-grey">20.5GB</div>
          </div>
          <a href="/#" class="upload c-white fs-13 rad-6 d-block bg-blue w-fit">
            <i class="fa-solid fa-angles-up mr-10"></i>
            Upload</a>
        </div>
        <div class="files-content d-grid gap-20">
          {FileData}

          {/* </div> */}
        </div>
      </div>

    </>)
}

export default Files