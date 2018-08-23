class ItemUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
