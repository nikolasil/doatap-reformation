import React, { useEffect, useState } from 'react';
import { Flex, Breadcrumb, BreadcrumbItem, Link, BreadcrumbSeparator } from '@chakra-ui/react';
const BreadcrumbWrapper = () => {
	const [pathArray, setArray] = useState([]);
	useEffect(() => {
		const path = window.location.pathname.split('/').slice(1);
		setArray(path);
	}, []);

	return (
		<Flex mx={'10px'}>
			<Breadcrumb>
				{pathArray.map((item, index) => {
					return (
						<BreadcrumbItem key={index} fontSize={'18px'}>
							<Link
								href={pathArray.reduce((sum, sublink, i) => {
									if (i <= index) {
										return sum + '/' + sublink;
									}
								}, '')}>
								{item[0] + item.slice(1).toLowerCase()}
							</Link>
						</BreadcrumbItem>
					);
				})}
			</Breadcrumb>
		</Flex>
	);
};

export default BreadcrumbWrapper;
