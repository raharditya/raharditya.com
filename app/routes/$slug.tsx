import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Content from '~/components/project-details/Content';
import ProjectDetailsModal from '~/components/project-details/ProjectDetailsModal';

export const meta: MetaFunction = () => {
  // TODO: Update meta
  return [{ title: 'Raharditya' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function ProjectDetails() {
  return (
    <div className="bg-primary-light">
      <div className="mx-auto max-w-[1350px] lg:px-4">
        <div className="pb-4 pt-6">
          <a href="/" className="flex items-center gap-2 underline">
            <i className="fi fi-rr-arrow-left flex h-4 w-4 items-center justify-center"></i>
            Back to homepage
          </a>
        </div>

        <Content />
      </div>
    </div>
  );
}
