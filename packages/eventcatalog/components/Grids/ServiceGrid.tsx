import React from 'react';
import Link from 'next/link';

import { CubeIcon } from '@heroicons/react/outline';

import { Service } from '@eventcatalog/types';

import getBackgroundColor from '@/utils/random-bg';

interface ServiceGridProps {
  services: Service[];
}

function ServiceGrid({ services = [] }: ServiceGridProps) {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
      {services.map((service) => {
        const { draft: isDraft } = service;

        return (
          <li key={service.name} className="flex">
            <Link href={`/services/${service.name}`}>
              <a className="flex shadow-sm w-full">
                <div
                  style={{
                    background: getBackgroundColor(service.name),
                  }}
                  className="w-4 rounded-l-md"
                />
                <div className="w-full border-t border-r border-b border-gray-200 bg-white rounded-r-md ">
                  <div className="p-4 text-sm space-y-2 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-gray-900 font-bold">{service.name}</span>
                      {isDraft && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500 text-gray-100">
                          Draft
                        </span>
                      )}
                      <div className="text-gray-500 text-xs font-normal mt-2 line-clamp-3">
                        {service.summary}
                      </div>
                    </div>
                    <div className="flex space-x-4 text-xs pt-2 relative bottom-0 left-0">
                      <div className=" font-medium text-gray-500">
                        <CubeIcon
                          className="h-4 w-4 text-green-400 inline-block mr-2"
                          aria-hidden="true"
                        />
                        Subscribe Events ({service.subscribes.length})
                      </div>
                      <div className=" font-medium text-gray-500">
                        <CubeIcon
                          className="h-4 w-4 text-indigo-400 inline-block mr-2"
                          aria-hidden="true"
                        />
                        Publish Events ({service.publishes.length})
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ServiceGrid;
