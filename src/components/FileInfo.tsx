import React from 'react';
import prettyBytes from 'pretty-bytes';

import useMediaInfo from '@/hooks/useMediaInfo';

import type { FileType } from '@/core/types/api/file';

const FileInfo = ({ compact, file }: { compact?: boolean, file: FileType }) => {
  const mediaInfo = useMediaInfo(file);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4">
        {!compact && <div className="text-xl font-semibold opacity-65">File Details</div>}
        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">File Name</div>
            {mediaInfo.Name}
          </div>
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">Location</div>
            {mediaInfo.Location}
          </div>
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">Size</div>
            {prettyBytes(mediaInfo.Size, { binary: true })}
          </div>
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">Group</div>
            {mediaInfo.Group}
          </div>
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">Video</div>
            {mediaInfo.VideoInfo.join(' | ')}
          </div>
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">Audio</div>
            {mediaInfo.AudioInfo.join(' | ')}
          </div>
          <div className="flex">
            <div className="min-w-[9.375rem] font-semibold">Chapters</div>
            {mediaInfo.Chapters ? 'Yes' : 'No'}
          </div>
          {compact && (
            <div className="flex">
              <div className="min-w-[9.375rem] font-semibold">CRC</div>
              {mediaInfo.Hashes.CRC32 ?? ''}
            </div>
          )}
        </div>
      </div>

      {!compact && (
        <div className="flex flex-col gap-y-4">
          <div className="text-xl font-semibold opacity-65">File Hashes</div>
          <div className="flex flex-col gap-y-1">
            <div className="flex">
              <div className="min-w-[9.375rem] font-semibold">ED2K</div>
              {mediaInfo.Hashes.ED2K ?? ''}
            </div>
            <div className="flex">
              <div className="min-w-[9.375rem] font-semibold">CRC</div>
              {mediaInfo.Hashes.CRC32 ?? ''}
            </div>
            <div className="flex">
              <div className="min-w-[9.375rem] font-semibold">SHA1</div>
              {mediaInfo.Hashes.SHA1 ?? ''}
            </div>
            <div className="flex">
              <div className="min-w-[9.375rem] font-semibold">MD5</div>
              {mediaInfo.Hashes.MD5 ?? ''}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInfo;
